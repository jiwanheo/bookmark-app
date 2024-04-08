import { useEffect, useState } from "react";
import "./App.css";
import { bookmarkStore } from "../../backend/stores/bookmarkStore";

function App() {
  const [bookmark, setBookmark] = useState();
  const [mostRecentBookmark, setMostRecentBookmark] = useState();
  const [allBookmarks, setAllBookmarks] = useState();

  // Upon app load, get `mostRecentBookmark` & `allBookmarks` for the first time
  useEffect(() => {
    bookmarkStore.fetchMostRecentBookmark(setMostRecentBookmark);
    bookmarkStore.fetchAllBookmarks(setAllBookmarks);
  }, []);

  // Every user keystroke updates `bookmark`
  const handleTextChange = function (event) {
    setBookmark(event.target.value);
  };

  // Create new bookmark, by sending `createBookmark` POST request
  const handleFormSubmit = function (e) {
    // React default behaviour is that on form submit, the entire page refreshes
    // we'll need to suppress it, so the request goes through
    e.preventDefault();

    // Send the post request, and update `mostRecentBookmark`
    bookmarkStore.createBookmark(bookmark, setMostRecentBookmark);

    // Clear form
    e.target.reset();
  };

  // When mostRecentBookmark is updated via the `createBookmark` POST request,
  // allBookmarks should be updated, by executing the `fetchAllBookmarks` GET request again
  useEffect(() => {
    bookmarkStore.fetchAllBookmarks(setAllBookmarks);
  }, [mostRecentBookmark]);

  return (
    <>
      <h1>My bookmarking app</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter URL:
          <input type="text" name="url-text" onChange={handleTextChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h2>Most recently saved bookmark:</h2>
      <span>{mostRecentBookmark}</span>

      <h2>All bookmarks</h2>
      <div id="all-bookmarks">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>bookmark</th>
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
