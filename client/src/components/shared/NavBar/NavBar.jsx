import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Home
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="index.html">Volunteer</a>
            </li>
            <li>
              <a href="badges.html">Users</a>
            </li>
            <li>
              <a href="collapsible.html">Testimonials</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
