import React, { useContext, useEffect, useState } from "react";
import "../styling/Profile.css";
import { getUsers } from "../api";
import UserCard from "./UserCard";
import { ErrorContext } from "../contexts/Error";
import { Link } from "react-router-dom";

export default function Profile({ isLoggedIn, setIsLoggedIn }) {
  //Login is hardcoded to one user for now
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isError, setIsError } = useContext(ErrorContext);

  useEffect(() => {
    setIsError(false);
    getUsers()
      .then((users) => {
        setUsersList(users);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsError(true);
        }
      });
  }, [setIsError]);

  if (isError) {
    <div id="err-msg">
      <h1>Oops! Something went wrong</h1>
      <h2 id="msg-text">Here's a link back to the login page</h2>
      <Link to="/user" className="link">
        Login
      </Link>
    </div>;
  }

  return (
    <div>
      {isLoading ? (
        <h1 id="loading">Loading...</h1>
      ) : (
        <div>
          {isLoggedIn ? (
            <div id="logged-in-card">
              {usersList.map((user) => {
                if (user.username === "jessjelly") {
                  return <UserCard key={user.username} user={user}></UserCard>;
                }
              })}
            </div>
          ) : (
            <div className="log-in">
              <h2 id="log-in-message">Please log in</h2>
              <div id="log-in-card">
                {usersList.map((user) => {
                  if (user.username === "jessjelly") {
                    return (
                      <UserCard
                        key={user.username}
                        user={user}
                        setIsLoggedIn={setIsLoggedIn}
                      ></UserCard>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
