import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51QrwN8J5od9Yw5ToXyUBXQ4ENcHXYwPGr1FqAOZzOpIxrkIGn12vEUn0Mx5SpRtxFoGbaJCqocJ4pXieXB5aJSAs00VWXZ4vAP";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
