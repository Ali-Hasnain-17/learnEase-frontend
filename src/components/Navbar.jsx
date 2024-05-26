import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isAuth } from "../utils/isAuth";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="nav">
      <div className="logo">LearnEase</div>
      <ul className="links">
        {!isAuth() ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <Link className={`link ${pathname === "/" && "active"}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link"
                onClick={() => console.log("logout")}
                to="#"
              >
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
