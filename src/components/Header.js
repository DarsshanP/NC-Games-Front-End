import { useContext } from "react";
import { UserContext } from "../contexts/User";
import "../styling/Header.css";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 id="banner">Review Zone</h1>
    </div>
  );
}

export default Header;
