import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User";
import { ErrorProvider } from "./contexts/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
