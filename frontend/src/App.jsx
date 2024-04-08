import { useEffect, useState } from "react";
import "./App.css";
import { bookmarkStore } from "../../backend/stores/bookmarkStore";

function App() {
  const [bookmark, setBookmark] = useState();
  const [mostRecentBookmark, setMostRecentBookmark] = useState();
  const [allBookmarks, setAllBookmarks] = useState();

  useEffect(() => {
    bookmarkStore.fetchMostRecentBookmark(setMostRecentBookmark);
    bookmarkStore.fetchAllBookmarks(setAllBookmarks);
  }, []);

  const handleSubmit = function () {
    alert(`A new url was submitted: ${bookmark}`);
    bookmarkStore.createBookmark(bookmark);
    bookmarkStore.fetchMostRecentBookmark(setMostRecentBookmark);
  };

  const handleChange = function (event) {
    setBookmark(event.target.value);
  };

  const handleButtonClick = function () {
    bookmarkStore.fetchAllBookmarks(setAllBookmarks);
  };

  return (
    <>
      <h1>My bookmarking app</h1>
      <button onClick={handleButtonClick}>Click me</button>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" name="url-text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>Most recently saved bookmark:</div>
      <span>{mostRecentBookmark}</span>
      <div>All bookmarks</div>
      <div id="all-bookmarks">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>bookmark</td>
            </tr>
          </thead>
          <tbody>
            {allBookmarks ? (
              allBookmarks.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.bookmark}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
