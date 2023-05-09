import React from 'react'
import './Navbar.css'
import {AiOutlineUser} from "react-icons/ai"
import {FiFacebook, FiInstagram,FiTwitter, FiLinkedin} from "react-icons/fi"
import {} from "react-icons/ai"
import {} from "react-icons/ai"


const Navbar = () => {
  return (
    // <header className="nav-header">
    //   <div className="navbar">
    //     <ul className="nav-menu">
    //       <li>HOME</li>
    //       <li>AUTO LISTING</li>
    //       <li>ABOUT US</li>
    //       <li>CONTACT</li>
    //     </ul>
    //   </div>

    //   <button className="btn">Login</button>
    // </header>

    <div className="nav-header">
      <div className="nav-l">
        <ul className="nav-menu">
          <li><span>Phone:</span> 0706 333 429</li> |
          <li><span>Opening Hours:</span> Mon to Fri: 9:00am to 6:00pm</li> |
          <li><span>Location:</span> Valley Road, Nairobi, Kenya</li>
        </ul>
      </div>
      <div className="nav-r">
        <ul className="nav-menu">
          <li><AiOutlineUser /></li>
          <li>Login</li> |
          <li>Register</li> |
          <li>Follow Us:</li>
          <li><FiFacebook/></li>
          <li><FiInstagram/></li>
          <li><FiTwitter/></li>
          <li><FiLinkedin/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;