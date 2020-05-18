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
              <a href="matches">Request Delivery</a>
            </li>
            <li>
              <a href="dashboard">Dashboard</a>
            </li>
            <li>
              <a href="complete-profile">Volunteer</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
