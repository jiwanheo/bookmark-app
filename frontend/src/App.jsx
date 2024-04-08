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
