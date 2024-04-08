import axios from "axios";

const fetchMostRecentBookmark = (setFunc) => {
  axios.get("http://localhost:8080/bookmark").then((res) => {
    const bookmarkValue = res.data.map((row) => row.bookmark);
    setFunc(bookmarkValue);
  });
};

const fetchAllBookmarks = (setFunc) => {
  axios.get("http://localhost:8080/all-bookmarks").then((res) => {
    const bookmarks = res.data;
    setFunc(bookmarks);
  });
};

// setFunc here sets `mostRecentBookmark`
const createBookmark = (bookmark, setFunc) => {
  axios
    .post("http://localhost:8080/create-bookmark", {
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
