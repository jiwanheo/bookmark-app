// This should be where ORM lives

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "mydb_role",
  password: "some_password",
  host: "127.0.0.1",
  port: 5432,
  database: "mydb",
});

async function getAllBookmarks() {
  const result = await pool.query("SELECT * FROM bookmarks;");
  return result;
}

async function getMostRecentBookmark() {
  const result = await pool.query(
    "SELECT * FROM bookmarks WHERE id=(SELECT max(id) FROM bookmarks)"
  );
  return result;
}

async function createBookmark(bookmark) {
  const result = await pool.query(
    `INSERT INTO bookmarks(bookmark) VALUES('${bookmark}');`
  );
  return result;
}

const result = await getAllBookmarks();
console.log(result);
