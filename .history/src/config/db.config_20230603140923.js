export const host = process.env.DATABASE_HOST || 'localhost';
export const database = process.env.DATABASE_NAME || 'car';
export const user = process.env.DATABASE_USER || '';
export const password = process.env.DATABASE_PASSWORD || '';
export const port = process.env.DATABASE_USER || 5432;

export let dbConnection = sequelize.Sequelize(
    database,
    user,
    password,
    {
        host: host,
        port: port,
        dialect: 'postgres'
    }
);
