import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123",
    database: process.env.DB_NAME || "test",
    port: process.env.DB_PORT || "5432",
  },
};
