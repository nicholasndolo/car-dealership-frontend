import React from 'react'
import './ContactUs.css'
import banner from '../../assets/banner.png'

const ContactUs = () => {
  return (
    <div className="contact"  style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }} >
        <div className="contact-l">
            <div>
                <span >Gift Your Family </span>
                <span className="text">A Trusted </span>
                <span > New Car!</span>
            </div>
            <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto ea incidunt nam. Perferendis rerum hic aspernatur facere nulla cupiditate fugiat ducimus obcaecati, expedita ea magnam quo dicta fugit perspiciatis.</span>
            </div>
        </div>
        <div className="contact-r">
            <button className="btn btn-danger">Contact Us Now</button>
        </div>
    </div>
  )
}

export default ContactUs