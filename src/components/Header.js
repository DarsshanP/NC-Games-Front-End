import { useContext } from "react";
import { UserContext } from "../contexts/User";
import "../styling/Header.css";

function Header() {
  return (
    <div>
      <h1 id="banner">Review Zone</h1>
    </div>
  );
}

export default Header;
