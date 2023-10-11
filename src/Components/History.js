import { useEffect, useState } from "react";
import "./History.css";

function History() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const storedData = localStorage.getItem("imageData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setImageData(parsedData);
    }
    // Set isLoading to false when data retrieval is complete
    setIsLoading(false);
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>History</h2>
      {isLoading || imageData.length === 0 ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        // Render the history data when it's available
        <ul>
          {imageData.map((item, index) => (
            <li key={index}>
              <p>Prompt: {item.value}</p>
              <div className="imageContainer">
                {item.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="imageItem">
                    <img src={image.url} alt={`Generated image`} down />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
