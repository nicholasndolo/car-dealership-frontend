import React from 'react'
import {Link} from 'react-router-dom'
import { BsPencilFill  } from "react-icons/bs"
import { BsFillTrashFill  } from "react-icons/bs"
import "./ListingTable.css"

const ListingTable = ({vehicleList,  setVehicleList}) => {

  function handleDelete(carId) {
    fetch(`vehicles/${carId}`,{
      method: "DELETE"
    })
    // .then((res) => res.json())
     .then(()=>{

    setVehicleList(vehicleList.filter((car) => car.id !== carId))
    
     })
  }
  return (
    <div>
      
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Transmission</th>
            <th scope="col">Drive</th>
            <th scope="col">Mileage</th>
            <th scope="col">Edit</th>                       
            <th scope="col">Delete</th>                       
          </tr>
        </thead>  
          <tbody>
            {vehicleList.map((car) => {
                return (
                  
                  <tr className="table-secondary" key={car.id}>
                    <td > 
                        <img src={car.image} style={{width: "6rem", height: "3rem"}} alt={car.name}/>
                    </td>
                    <td>{car.name}</td>
                    <td >$ {car.price}</td>
                    <td >{car.category}</td>  
                    <td >{car.transmission}</td>  
                    <td >{car.drive}</td>  
                    <td >{car.mileage}</td>  
                    <td>
            
                      <Link to={`/${car.id}` } className="btn btn-secondary">
                        <BsPencilFill className="edit"/> 
                      </Link>
                    </td>  
                    <td>
                     <button className="btn btn-secondary">
                        <BsFillTrashFill className="delete" onClick={() => handleDelete(car.id)} />
                      </button>
                    </td>  

                  </tr>
                  )     

            })}
            
          </tbody>        
      </table>         
    </div>  

  )
}

export default ListingTable