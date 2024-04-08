// This file contains API Routes
import { pool } from "../model/db.js";

export async function getAllBookmarks(req, res) {
  const result = await pool.query("SELECT * FROM bookmarks;");
  res.send(result.rows);
}

export async function getMostRecentBookmark(req, res) {
  const result = await pool.query(
    "SELECT * FROM bookmarks WHERE id=(SELECT max(id) FROM bookmarks)"
  );
  res.send(result.rows);
}

export async function createBookmark(req, res) {
  // get the bookmark param off request
  const newBookmark = req.params.bookmark;
  const result = await pool.query(
    `INSERT INTO bookmarks(bookmark) VALUES('${newBookmark}');`
  );
  res.send("Bookmark created!");
}

export const bookmarkController = {
  getAllBookmarks: getAllBookmarks,
  getMostRecentBookmark: getMostRecentBookmark,
  createBookmark: createBookmark,
};