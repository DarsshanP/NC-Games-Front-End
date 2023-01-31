import React, { useEffect } from "react";
import "../styling/Home.css";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

function Home() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (user.username) {
    return (
      <div>
        {isLoading ? (
          <h1 id="loading">Loading...</h1>
        ) : (
          <h1>Welcome Back {user.username}!</h1>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {isLoading ? (
          <h1 id="loading">Loading...</h1>
        ) : (
          <h1>Welcome to ReviewZone! Home to any board game reviews.</h1>
        )}
      </div>
    );
  }
}

export default Home;
