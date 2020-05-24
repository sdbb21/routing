import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="main-nav-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="main-nav-active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/discover" activeClassName="main-nav-active">
            Discover
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
