// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Fetching data from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Updating state with the received image URL
        setDogImageUrl(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  return (
    <div>
      {/* Display "Loading..." when image URL is not yet fetched */}
      {!dogImageUrl && <p>Loading...</p>}
      {/* Display the image when URL is fetched */}
      {dogImageUrl && (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
}

export default App;
