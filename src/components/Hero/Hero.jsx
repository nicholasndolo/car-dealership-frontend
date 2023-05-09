import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import NumberCounter from 'number-counter'
import bently from "../../assets/bently.png"
import {FaQuoteRight} from "react-icons/fa"
import {FaQuoteLeft} from "react-icons/fa"
import './Hero.css'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}

  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{left: '225'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
            >

          </motion.div>
          <span>The best car dealers in E.Africa</span>
        </div>

        <div className="hero-text">
              <div>
                <span className='stroke-text'>Find Your Next Car </span>
              </div>
              <div>
                <span className='stroke-text'>With NicMotors</span>
              </div>
              <div>
                <span>
                In here we will help you find the right car for your life to be meaningful
                </span>
              </div>
              <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
          </div>

      </div>

      <div className="right-h">
        <div className="containers">
          <form className="form" >
                <input
                  type="text"
                  placeholder="Search here..."/>
          </form>
          
         <Link to="/login" className="btn btn-secondary">Add listing</Link>
         {/* <div className='remove'>
           <Link to="/login" className="btn btn-secondary">Add listing</Link>
          </div> */}
        </div>
        <div>
        <img src={bently} alt="" className="hero-image" />
       
        </div>

      </div>
    </div>
  )
}

export default Hero