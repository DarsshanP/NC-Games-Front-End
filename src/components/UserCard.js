import React, { useContext } from "react";
import { UserContext } from "../contexts/User";

function UserCard({ user, setIsLoggedIn }) {
  const { avatar_url, username } = user;
  const { setUser } = useContext(UserContext);

  const clickHandler = () => {
    setUser(user);
    setIsLoggedIn(true);
  };

  return (
    <div className="usercard">
      <h3>{username}</h3>
      <img src={avatar_url} className="avatarimg" alt={username}></img>
      <br></br>
      <button onClick={clickHandler}>Log me in!</button>
    </div>
  );
}

export default UserCard;
