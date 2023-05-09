import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../../assets/image1.jpg";
import "./Header.css"

const Header = () => {
  return (
    <header className="head">
        <div className="header-l">
          <span>Car Inventory Dashboard</span>
        </div>
        <div className="header-r">
         <img src={image1} alt="" />
         <span>Nicholas Ndolo</span>
         <Link to='/' className="home-btn">Go back</Link>
         
        </div>
    </header>
  )
}

export default Header