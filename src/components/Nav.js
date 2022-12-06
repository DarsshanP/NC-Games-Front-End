import { NavLink } from "react-router-dom";
import "../styling/Nav.css";

function Nav() {
  return (
    <div id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
    </div>
  );
}

export default Nav;
