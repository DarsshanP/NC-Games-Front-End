import { useContext } from "react";
import { UserContext } from "../contexts/User";
import "../styling/Header.css";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 id="banner">Review Zone</h1>
      {user.username ? <h2 id="welcome">Welcome {user.username}</h2> : null}
    </div>
  );
}

export default Header;
