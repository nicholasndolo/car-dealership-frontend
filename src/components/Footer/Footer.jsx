import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import { FiInstagram,FiTwitter, FiLinkedin } from "react-icons/fi"
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer-c">
        <hr/>
        <div className="footer">
          <div className="social-links">
            <GoMarkGithub />
            <FiInstagram />
            <FiTwitter/>
            <FiLinkedin/>
        </div>
        <div className="logo-f">
            <img src={logo} alt="" />
        </div>
      </div>
      <hr/>

    </div>
  )
}

export default Footer