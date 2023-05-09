import React from 'react';
import Vehicle from '../Vehicle/Vehicle'
import './Listing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from "framer-motion"


const Listings = ({vehicleList}) => {
  const transition = {type: 'spring', duration: 3}
  

  return (
    <div className="listings-container">
      <h3>Popular Listings</h3>
      <div>
        <span className="stroke-text">View </span>
        <span>Top Featured </span>
        <span className="stroke-text">Listings</span>
      </div>
      <div className="container car" >
        {vehicleList.map((listing)=>(

          <Vehicle key={listing.id} image={listing.image} category={listing.category}
           name={listing.name} price={listing.price} transmission={listing.transmission} drive={listing.drive} mileage={listing.mileage}/>
          // <motion.div
          //   initial={{opacity: 0, x: -100}}
          //   transition={{...transition, duration: 3}}
          //   whileInView={{opacity:1, x: 0}}
          //   className="col-3"
          // >
          //   <img src={listing.image} className="card card-img-top" alt="" style={{width: 20 + 'rem', height: 12 + 'rem'}}/>
          //   <div class="card-body">
          //     <div className="top">
          //       <h4>{listing.category}</h4>
          //       <h3>{listing.name}</h3>
          //       <h3>Price: ${listing.price}</h3>
          //     </div>
          //     <hr/>
          //     <div className="middle">
          //       <div>
          //         <span className="middle-t">Transmission </span>
          //         <span>{listing.transmission}</span>
          //       </div>
          //       <div>
          //         <span className="middle-t">Drive</span>
          //         <span>{listing.drive}</span>
          //       </div>
          //       <div>
          //         <span className="middle-t">Mileage</span>
          //         <span>{listing.mileage}(Mi)</span>
          //       </div>
          //     </div>
          //     <div className="bottom">
          //       <button className="button">View Details</button>
          //     </div>
          //   </div>
          // </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default Listings