import React from "react";
import "./Topbar.scss";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from "../../assets/logo.png";
import Menu from "../menu/Menu"

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="profile">
          
          <Link to="/familymanager">Profile </Link>
          <AccountCircleIcon className='icon' >OP</AccountCircleIcon>
        </div>
        <div className="right">
          <div className="hamburger">
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
          </div>
      </div>
      </div>
      <Menu></Menu>
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
