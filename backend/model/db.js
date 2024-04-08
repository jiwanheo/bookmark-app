// This should be where ORM lives

import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "mydb_role",
  password: "some_password",
  host: "127.0.0.1",
  port: 5432,
  database: "mydb",
});
