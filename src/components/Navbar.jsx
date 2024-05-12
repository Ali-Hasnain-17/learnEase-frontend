import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="nav">
      <div className="logo">LearnEase</div>
      <ul className="links">
        <li>
          <Link
            className={`link ${pathname === "/login" && "active"}`}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/register" && "active"}`}
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
