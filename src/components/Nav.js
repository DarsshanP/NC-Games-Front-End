import { NavLink } from "react-router-dom";
import "../styling/Nav.css";

function Nav() {
  return (
    <div id="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav--link--selected" : "nav--link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          isActive ? "nav--link--selected" : "nav--link"
        }
      >
        Reviews
      </NavLink>
    </div>
  );
}

export default Nav;
