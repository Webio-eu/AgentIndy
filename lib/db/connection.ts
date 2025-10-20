// Sddileni spojeni na databazi lokalni env.
import mysql2 from 'mysql2';
import { getEnv } from '../../env';

const connection = mysql2.createConnection({
  port: Number(getEnv("DATABASE_PORT")),
  host: getEnv("DATABASE_HOST"),
  user: getEnv("DATABASE_USER"),
  password: getEnv("DATABASE_PASSWORD"),
  database: getEnv("DATABASE_NAME"),
});

export { connection };
