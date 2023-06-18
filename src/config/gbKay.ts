import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT 
const SECRET_KEY = process.env.SECRET_KAY


const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT = process.env.DB_PORT

export {
    DB_NAME,
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    PORT,
    SECRET_KEY
}