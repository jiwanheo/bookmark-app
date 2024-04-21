// This should be where ORM lives

import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "root",
  password: "root",
  host: "postgres",
  port: 5432,
  database: "mydb",
});
