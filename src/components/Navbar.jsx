import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="main-div">
        <div className="logo">
          <img
            className="logo"
            width="50px"
            height="50px"
            src="https://i.pinimg.com/736x/94/3f/cf/943fcf1ad73de4334e083475d1ab9541.jpg"
            alt=""
          />
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Service</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="button-nav-set">
          <button>View Profile</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
