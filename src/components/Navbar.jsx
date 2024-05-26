import React from "react";
import "../Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showYearDrop, setShowYearDrop] =useState(false)

  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  };
  const showYearDropDown = () => {
    setShowYearDrop(!showYearDrop)
  }
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
              <a href="#">Select Year <ExpandMoreIcon/></a>
              </div>
              <ul className="dropdown">
                <li>
                  <a href="#">Year 1</a>
                </li>
                <li>
                  <a href="#">Year 2</a>
                </li>
                <li>
                  <a href="#">Year 3</a>
                </li>
                <li>
                  <a href="#">Year 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">More Info <ExpandMoreIcon/></a>
              <ul className="dropdown">
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">User Instructions <ExpandMoreIcon/></a>
              {/* <ul className="dropdown">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Consulting</a></li>
          </ul> */}
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
            <a href="#"  onClick={showYearDropDown }><ExpandMoreIcon/>Select Year</a>
            <ul className={`sidedropdown ${showYearDrop ? "active" : ""}`}>
              <li>
                <a href="#">Year 1</a>
              </li>
              <li>
                <a href="#">Year 2</a>
              </li>
              <li>
                <a href="#">Year 3</a>
              </li>
              <li>
                <a href="#">Year 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><ExpandMoreIcon/>More Info</a>
            <ul className="dropdown">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><ExpandMoreIcon/>User Instructions</a>
            {/* <ul className="dropdown">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Consulting</a></li>
          </ul> */}
          </li>
        </ul>
        <button className="logout-button">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Navbar;
