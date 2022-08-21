import React, { useState } from "react";
import "./NavBar2.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const NavBar2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar-logo">
          <h4 className="navbar-logo">ConnectVerse</h4>
        </div>

        <div className="menu-items">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className="nav-hidden">
            <ul className={click ? "nav-menu active" : "navbar-items"}>
              <li className="navbar-item">
                <a href="/">Home</a>
              </li>
              <li className="navbar-item">
                <a href="/">Projects</a>
              </li>
              <li className="navbar-item">
                <a href="/">Courses</a>
              </li>
              <li className="navbar-item">
                <a href="/">Jobs</a>
              </li>
              <div className="navbar-login">
                <button className="navbar-btn">Login</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
