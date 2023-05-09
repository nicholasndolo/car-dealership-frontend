import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'



const Header = () => {
  return (
      <div className="header">
          <div className="header-l">
            <img src={logo} alt="" className="logo"/>
            <ul className="header-menu">
              <li>Home</li>
              <li>Inventory</li>
              <li>Shop</li>
              <li>Plans</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="header-r">

          </div>
      </div>
  )
  
}

export default Header