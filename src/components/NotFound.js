import React from "react";
import "../styling/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <div id="info">
        <p>Here are some helpful links:</p>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/reviews" className="link">
          Reviews
        </Link>
        <Link to="/profile" className="link">
          Profile Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
