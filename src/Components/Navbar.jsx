import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 fixed z-[1]">
        {/* Small Screen Navbar */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-y-1 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-right"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>

        {/* Full Screen Navbar */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
