import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URL= process.env.MONGO_URL;

export const EXPIRATION_TIME = process.env.EXPIRATION_TIME;
export const SECRET_KEY = process.env.SECRET_KEY;