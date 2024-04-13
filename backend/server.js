import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { bookmarkController } from "./controllers/bookmarkController.js";

const app = express();
const port = 8080;

// if (process.env.NODE_ENV == "development") {
//   console.log("in dev");
//   app.use(
//     cors({
//       origin: "http://localhost:5173",
//     })
//   );
// }

app.use(bodyParser.json());

app.get("/bookmark", bookmarkController.getMostRecentBookmark);
app.get("/all-bookmarks", bookmarkController.getAllBookmarks);
app.post("/create-bookmark", bookmarkController.postBookmark);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
