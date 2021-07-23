import React from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="profile">
          <Link to="/familymanager">Profile </Link>
        </div>
      </div>
      <div className="topbar-bottom">
        <div className="budget">
          <Link to="/">Budget </Link>
        </div>

        <div className="investment">
          <Link to="/investment">investment </Link>
        </div>
        <div className="news">
          <Link to="/news">News </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
