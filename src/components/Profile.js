import React, { useEffect, useState } from "react";
import "../styling/Profile.css";
import { getUsers } from "../api";
import UserCard from "./UserCard";

export default function Profile({ isLoggedIn, setIsLoggedIn }) {
  //Login is hardcoded to one user for now
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsersList(users);
      setIsLoading(false);
    });
  }, []);

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
