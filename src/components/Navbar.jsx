import React, { useState } from "react";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showYearDrop, setShowYearDrop] = useState(false);

  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  };

  const showYearDropDown = () => {
    setShowYearDrop(!showYearDrop);
  };

  return (
    <>
      <div className="nav">
        <div>
          <div className="Address">
            <img src="./acesLogo.jpeg" alt="aceslogo" />
            <h3 className="poppins-regular">Hi, Logical883</h3>
          </div>
          <p className="email">logical@gmail.com</p>
          <div className="hamburger-icon">
            <MenuIcon
              onClick={handleHamburgerClick}
              sx={{ color: "white", fontSize: 30, marginLeft: 0 }}
            />
          </div>
        </div>
        <div>
          <ul className="mainLinks">
            <li>
              <div>
                <a href="#" className="nav-link">
                  <span>Select Year</span> <ExpandMoreIcon className="icon" />
                </a>
              </div>
              <ul className="dropdown">
                <li><a href="#">Year 1</a></li>
                <li><a href="#">Year 2</a></li>
                <li><a href="#">Year 3</a></li>
                <li><a href="#">Year 4</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link">
                <span>More Info</span> <ExpandMoreIcon className="icon" />
              </a>
              <ul className="dropdown">
                <li><a href="#">Team</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Mission</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link">
                <span>User Instructions</span> <ExpandMoreIcon className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidenav ${showNav ? "active" : ""}`}>
        <div className="sideAddress">
          <img src="./acesLogo.jpeg" alt="aceslogo" />
          <h3 className="poppins-regular">Hi, Logical883</h3>
        </div>
        <p className="email">logical@gmail.com</p>
        <ul className="sideLinks">
          <li>
            <a href="#" onClick={showYearDropDown} className="nav-link">
              <ExpandMoreIcon className="icon" />
              <span style={{ marginLeft: "5px" }}>Select Year</span>
            </a>
            <ul className={`sidedropdown ${showYearDrop ? "active" : ""}`}>
              <li><a href="#">Year 1</a></li>
              <li><a href="#">Year 2</a></li>
              <li><a href="#">Year 3</a></li>
              <li><a href="#">Year 4</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link">
              <ExpandMoreIcon className="icon" />
              More Info
            </a>
            <ul className="dropdown">
              <li><a href="#">Team</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Mission</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link">
              <ExpandMoreIcon className="icon" />
              User Instructions
            </a>
          </li>
        </ul>
        <button className="logout-button">Log Out</button>
      </div>
    </>
  );
};

export default Navbar;
