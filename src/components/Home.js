import React, { useEffect } from "react";
import "../styling/Home.css";
import { useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <h1>Under Construction</h1>
      )}
    </div>
  );
}

export default Home;
