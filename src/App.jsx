import { useEffect, useState } from "react";
import "./App.css";
import { getMostRecentBookmark } from "./request";

function App() {
  const [bookmark, setBookmark] = useState();
  const [mostRecentBookmark, setMostRecentBookmark] = useState();

  useEffect(() => {
    getMostRecentBookmark(setMostRecentBookmark);
  }, []);

  const handleSubmit = function () {
    alert(`A new url was submitted: ${bookmark}`);
  };

  const handleChange = function (event) {
    setBookmark(event.target.value);
  };

  return (
    <>
      <h1>My bookmarking app</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" name="url-text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>Most recently saved bookmark:</div>
      <span>{mostRecentBookmark}</span>
    </>
  );
}

export default App;
