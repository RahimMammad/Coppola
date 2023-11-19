import React from 'react'
import "./SideBar.scss"
import Logo from "../../assets/logo-width-20px.png"

const SideBar = () => {
  return ( 
    <nav id='sidebar'>
        <div className="sidebar-main-container">
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <img src={Logo} alt="" />
            <div className="social-media">
                <i class="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
                <i class="fa-brands fa-youtube" style={{ color: "#ffffff" }}></i>
                <i class="fa-brands fa-vimeo-v" style={{ color: "#ffffff" }}></i>
                <i class="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i>
            </div>
        </div>
    </nav>
  )
}

export default SideBar