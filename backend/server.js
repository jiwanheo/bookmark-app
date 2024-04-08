import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { bookmarkController } from "./controllers/bookmarkController.js";

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  }),
  bodyParser.json()
);

app.get("/bookmark", bookmarkController.getMostRecentBookmark);
app.get("/all-bookmarks", bookmarkController.getAllBookmarks);
app.post("/create-bookmark", bookmarkController.postBookmark);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
