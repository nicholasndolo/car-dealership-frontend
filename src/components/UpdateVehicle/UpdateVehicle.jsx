import React, {useState} from 'react'; 
import './UpdateVehicle.css'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'


function UpdateVehicle({onUpdatedItem}){
    const [updatedDetails, setUpdatedDetails] = useState({
        image: "",  
        price: "",  
    })

    const navigate = useNavigate()

    let {carId} = useParams()

    function handleChange(e){
        setUpdatedDetails({...updatedDetails, [e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault();
         

        const updatedObj = {

            image: updatedDetails.image,
            price: updatedDetails.price
        }

        fetch(`vehicles/${carId}`,{
             method: "PATCH",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(updatedObj),

         })
         .then((res) => res.json())
         .then((updatedItem) => {
             onUpdatedItem(updatedItem)
             navigate("/dashboard")
         })
    }

    return (
        <div className="update-form">
             <h3>Update Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="outer">
                    <div className='input'>
                        <label for="image" className="form-label">Image <span>*</span></label>
                        <input
                            className="form-control"
                            type="string"
                            required
                            name="image"
                            value= {updatedDetails.image}
                            onChange={handleChange}
                            placeholder="Image url"/>
                    </div>
                    <div className='input'>
                        <label for="price" className="form-label">Price <span>*</span></label>
                        <input
                            className="form-control"
                            type="string"
                            required
                            name="price"
                            value= {updatedDetails.price}
                            onChange={handleChange}
                            placeholder="Price"/>
                    </div>

                   <button type="submit" className="submit">submit</button>          

                </div>
                         

            </form>
       
        </div>
    )
}

export default UpdateVehicle;

