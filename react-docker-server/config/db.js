import mysql from "mysql2/promise.js"
import dotenv, { config } from "dotenv"
dotenv.config()
export const connection= mysql.createPool({
  host: process.env.DB_HOST,
  user:"root",
  password:"Lem@19072006",
  database: "test",
  enableKeepAlive: true,
  connectionLimit: 10,
  port: process.env.DB_PORT
})
