import { FRONTEND_URL } from "./config.js";

export function welcomeEmailTemplate(name) {
  return `
    <div style="font-family:Poppins,Arial;">
      <h2>Welcome to Tiffany Fashion Annie, ${name}! 💖</h2>
      <p>We're excited to have you join our fashion family.</p>

      <p>Here’s a <b>10% OFF coupon</b> for your first order:</p>
      <h2 style="background:#f1f1f1;padding:10px;border-radius:8px;width:140px;text-align:center;">WELCOME10</h2>

      <a href="${FRONTEND_URL}/#/products"
         style="display:inline-block;padding:12px 20px;background:#4ac5c7;color:white;border-radius:5px;text-decoration:none;">
         Shop New Arrivals
      </a>

      <p>Enjoy your shopping 💕</p>
    </div>
  `;
}
