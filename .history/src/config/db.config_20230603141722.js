import { Sequelize } from "sequelize";

export const host = process.env.DATABASE_HOST || 'localhost';
export const database = process.env.DATABASE_NAME || 'car';
export const user = process.env.DATABASE_USER || 'root';
export const password = process.env.DATABASE_PASSWORD || '52717709_mee_postgresql';
export const port = process.env.DATABASE_USER || 5432;

export let dbConnection = new sequelize.Sequelize(
    database,
    user,
    password,
    {
        host: host,
        port: port,
        dialect: 'postgres'
    }
);

