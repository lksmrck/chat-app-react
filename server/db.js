//Connection of DB to server
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

export default pool;
