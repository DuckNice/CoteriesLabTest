import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
