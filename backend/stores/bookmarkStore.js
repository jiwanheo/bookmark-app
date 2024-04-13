import axios from "axios";

console.log(process.env.NODE_ENV);

const apiBase =
  process.env.NODE_ENV == "development" ? "http://localhost:8080" : "/api";

const fetchMostRecentBookmark = (setFunc) => {
  axios.get(`${apiBase}/bookmark`).then((res) => {
    const bookmarkValue = res.data.map((row) => row.bookmark);
    setFunc(bookmarkValue);
  });
};

const fetchAllBookmarks = (setFunc) => {
  axios.get(`${apiBase}/all-bookmarks`).then((res) => {
    const bookmarks = res.data;
    setFunc(bookmarks);
  });
};

// setFunc here sets `mostRecentBookmark`
const createBookmark = (bookmark, setFunc) => {
  axios
    .post(`${apiBase}/create-bookmark`, {
      bookmark: bookmark,
    })
    .then((res) => {
      setFunc(bookmark);
    });
};

export const bookmarkStore = {
  fetchMostRecentBookmark: fetchMostRecentBookmark,
  fetchAllBookmarks: fetchAllBookmarks,
  createBookmark: createBookmark,
};
