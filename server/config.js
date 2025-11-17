import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const IS_PROD = process.env.NODE_ENV === "production";

// 基础配置
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
export const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4242";


// Stripe / DB / JWT 配置仍保留在 .env.local
export const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
