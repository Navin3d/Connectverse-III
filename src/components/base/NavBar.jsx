import React from "react";
import "./NavBar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <a href="#">
          Connect
          <span>Verse</span>
        </a>
      </div>
      <nav>
        <div className="nav-links">
          <AiOutlineClose className="close" />
          <ul>
            {/* <li>
              <a href="#">Home</a>
            </li> */}
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>
          <div className="nav_btn">
            <button className="login">Login</button>
          </div>
        </div>
      </nav>
      <RiMenu3Fill className="menu_btn" />
    </div>
  );
};

export default NavBar;
