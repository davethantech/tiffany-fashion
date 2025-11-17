import "./config.js";
import { FRONTEND_URL, JWT_SECRET } from "./config.js";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "./sendEmail.js";
import { welcomeEmailTemplate } from "./welcomeEmail.js";
import { orderSuccessEmailTemplate } from "./orderSuccessEmail.js";
import { abandonedEmailTemplate } from "./abandonedEmail.js";


const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

// ✅ 排除 webhook 的 bodyParser 影响
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.use(cors());

// ⚙️ MySQL 连接池
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


db.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255),
    amount DECIMAL(10,2),
    currency VARCHAR(10),
    customer_email VARCHAR(255),
    user_email VARCHAR(255),
    status VARCHAR(50),
    items JSON,
    checkout_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

db.query(`CREATE INDEX IF NOT EXISTS idx_order_id ON orders(order_id)`);

// ✅ 注册用户
app.post("/auth/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body || {};
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    db.query("SELECT id FROM users WHERE email = ?", [email], async (err, rows) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (rows.length > 0) {
        return res.status(409).json({ error: "Email already registered" });
      }

      const hash = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, hash],
        (err2, result) => {
          if (err2) return res.status(500).json({ error: "DB insert error" });
          sendEmail({
            to: email,
            subject: "🎉 Welcome to Tiffany Fashion Annie",
            html: welcomeEmailTemplate(firstName),
          });
        
          return res.json({ ok: true, userId: result.insertId });
          
        }
      );
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ 登录用户
app.post("/auth/signin", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, rows) => {
    if (err) return res.status(500).json({ error: "DB error" });
    if (rows.length === 0) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "dev_secret",
      { expiresIn: "7d" }
    );

    res.json({
      ok: true,
      token,
      profile: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
    });


  });
});

// ✅ Token 验证中间件
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET || "dev_secret", (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token" });
    req.user = user; // { userId, email }
    next();
  });
}

// ✅ 创建支付会话
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const line_items = cart.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
          description: item.description,
          images: [`${FRONTEND_URL}${item.image}`],

        },
        unit_amount: parseFloat(item.price.replace(/[£,]/g, "")) * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${FRONTEND_URL}/#/success`,
      cancel_url: `${FRONTEND_URL}/#/cart`,
      locale: "en",
    });
    

    // ✅ 从 token 获取登录用户邮箱
    const authHeader = req.headers.authorization;
    let userEmail = "guest_user";
    if (authHeader && authHeader.startsWith("Bearer ")) {
      try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
        userEmail = decoded.email || "guest_user";
      } catch {
        console.warn("⚠️ Invalid or expired token during checkout");
      }
    }

    const amount =
      line_items.reduce(
        (sum, item) => sum + item.price_data.unit_amount * item.quantity,
        0
      ) / 100;

    db.query(
      `INSERT INTO orders (order_id, amount, currency, customer_email, user_email, status, items, checkout_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        session.id,
        amount,
        "GBP",
        "pending_customer",
        userEmail,
        "unpaid",
        JSON.stringify(cart),
        session.url,
      ],
      (err) => {
        if (err) {
          console.error("❌ MySQL insert error:", err);
          return res.status(500).json({ error: "Database insert failed" });
        }
        console.log(`📝 Created unpaid order: ${session.id} for ${userEmail}`);
        res.json({ url: session.url });
      }
    );
  } catch (err) {
    console.error("🔥 Checkout session error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Stripe Webhook
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("❌ Webhook signature error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Stripe 付款人邮箱（不再使用作为收件人）
      const paymentEmail = session.customer_details?.email || "unknown@example.com";

      // 1️⃣ 查询订单
      db.query(
        "SELECT * FROM orders WHERE order_id = ?",
        [session.id],
        (err, results) => {
          if (err) {
            console.error("❌ Failed to load order", err);
            return;
          }

          if (results.length === 0) {
            console.error("❌ Order not found for webhook:", session.id);
            return;
          }

          const order = results[0];

          // 🚀 正确的收件人：当前登录用户（不是 Stripe 付款邮箱）
          const websiteUserEmail = order.user_email;

          let items = [];

          try {
            if (Array.isArray(order.items)) {
              // MySQL JSON 字段通过 mysql2 返回的情况：已经是数组
              items = order.items;
            } else if (typeof order.items === "string" && order.items.trim()) {
              // 老数据 / 某些环境下返回字符串，再做一次 JSON.parse
              items = JSON.parse(order.items);
            } else {
              items = [];
            }
          } catch (e) {
            console.error("❌ items JSON parse error, raw value:", order.items);
            items = [];
          }
                // 3️⃣ ⭐ 在这里修复图片路径 ⭐
      const IMAGE_BASE = process.env.FRONTEND_URL; // 来自 .env.local

      items = items.map((item) => ({
        ...item,
        image: item.image.startsWith("http")
          ? item.image
          : `${IMAGE_BASE}${item.image}`,
      }));

          


          // 3️⃣ 更新订单状态
          db.query(
            `UPDATE orders 
             SET status = 'paid', customer_email = ?
             WHERE order_id = ?`,
            [paymentEmail, session.id]
          );

          // 4️⃣ 发送邮件给网站用户，而不是付款人！
          sendEmail({
            to: websiteUserEmail,
            subject: "🧾 Your Tiffany Fashion Annie Order Confirmation",
            html: orderSuccessEmailTemplate(order, items),
          });

          console.log(`💰 Order ${session.id} fully processed`);
          console.log(`📧 Email sent to website user: ${websiteUserEmail}`);
        }
      );
    }

    res.sendStatus(200);
  }
);


// ✅ 获取当前登录用户订单
app.get("/orders", authenticateToken, (req, res) => {
  const userEmail = req.user.email;
  db.query(
    "SELECT * FROM orders WHERE user_email = ? ORDER BY created_at DESC LIMIT 100",
    [userEmail],
    (err, results) => {
      if (err) {
        console.error("❌ MySQL 查询错误:", err);
        return res.status(500).json({ error: "Database query failed" });
      }
      res.json(results);
    }
  );
});

app.get("/", (req, res) => {
  res.send("✅ Tiffany Store backend is running!");
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌱 NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`🌐 FRONTEND_URL: ${FRONTEND_URL}`);
  console.log("🌐 Webhook listening on /webhook");
  console.log("🧾 Orders API available at /orders");
});


app.get("/cron/abandoned-orders", async (req, res) => {
  db.query(
    `SELECT * FROM orders WHERE status='unpaid' AND created_at < NOW() - INTERVAL 1 MINUTE`,
    (err, results) => {
      results.forEach(order => {
        sendEmail({
          to: order.user_email,
          subject: "⏰ Complete your order at Tiffany Fashion Annie",
          html: abandonedEmailTemplate(order.checkout_url, JSON.parse(order.items)),
        });
      });

      res.json({ count: results.length });
    }
  );
});

