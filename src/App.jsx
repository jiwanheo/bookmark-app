import { useState } from 'react'
import './App.css'
import { apiCall } from './request';

function App() {

  const [bookmarkUrl, setBookmarkUrl] = useState();

  const handleSubmit = function() {
    alert(`A new url was submitted: ${bookmarkUrl}`);
  }

  const handleChange = function(event) {
    setBookmarkUrl(event.target.value);
  }

  return (
    <>
      <button onClick={apiCall}>Make API Call</button>
      <h1>My bookmarking app</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter URL:
          <input type="text" name="url-text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
