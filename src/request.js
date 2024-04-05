import axios from "axios";

export const getMostRecentBookmark = (setFunc) => {
  axios.get("http://localhost:8080/bookmark").then((res) => {
    setFunc(res.data);
  });
};
