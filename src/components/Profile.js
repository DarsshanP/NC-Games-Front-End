import React, { useEffect, useState } from "react";
import "../styling/Profile.css";
import { getUsers } from "../api";
import UserCard from "./UserCard";

export default function Profile() {
  //Login is hardcoded to one user for now
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    getUsers().then((users) => {
      setUsersList(users);
    });
  }, []);

  //   const logInHandler = () => {
  //     setUser(usersList[5]);
  //   };

  return (
    <div>
      <h2 id="log-in-message">Please log in</h2>
      <div>
        <h3>Is this you?</h3>
        {usersList.map((user) => {
          if (user.username === "jessjelly") {
            return <UserCard key={user.username} user={user}></UserCard>;
          }
        })}
      </div>
    </div>
  );
}
