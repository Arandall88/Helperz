import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div classNameName="nav-wrapper">
          <a href="/" classNameName="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" classNameName="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
