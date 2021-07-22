import React from 'react'
import "./Topbar.scss"
import logo from "../../assets/logo.png"

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-top">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    
                </div>
                <div className="profile">profile</div>
            </div>
            <div className="topbar-bottom">
                <div className="budget">budget</div>
                <div className="investment">investment</div>
                <div className="news">news</div>
            </div>
        </div>
    )
}

export default Topbar
