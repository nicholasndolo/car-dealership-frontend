import { useNavigate } from "react-router-dom";
import React,{useState} from 'react'
import './NewVehicleForm.css'

function NewVehicleForm({handleAddVehicle}){
    const navigate = useNavigate();
    const [newVehicle, setNewVehicle] = useState({
        name: "",
        image: "",
        price: "",
        transmission: "",
        drive: "",
        mileage: "",
        category: "",
        admin_id: "",
    })

    function handleChange(e) {
        setNewVehicle({...newVehicle,[e.target.name]: e.target.value})

    }

    function handleSubmit(e){
        e.preventDefault()

        const vehicleObj  = {
            name: newVehicle.name,
            image: newVehicle.image, 
            price: newVehicle.price,
            transmission: newVehicle.transmission,
            drive: newVehicle.drive,
            mileage: newVehicle.mileage,
            category: newVehicle.category,
            admin_id: newVehicle.admin_id

        }

            fetch("/vehicles",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vehicleObj),
            })
            .then((res) => res.json())
            .then((newVehicle) => {
                handleAddVehicle(newVehicle);
                navigate("/dashboard");
            })
        }


    return (
        <div className="input-form">
            <h3>Post New Car</h3>
            <form onSubmit={handleSubmit} className="parent-container">
              <div className="child-container">
                <div className="child-one">
                    <label for="Name" className="form-label">Name <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="name"
                        value={newVehicle.name}
                        onChange={handleChange}
                        placeholder="Vehicle Name"
                    />
                </div>
                <div className="child-two">
                    <label for="image-url" className="form-label">Image URL <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="image"
                        value={newVehicle.image}
                        onChange={handleChange}
                        placeholder="Enter image url here..."
                    />
                </div>
              </div>
             <div className="child-container">
             <div className="child-one">
                    <label for="price" className="form-label">Price <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="price"
                        value= {newVehicle.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                </div>
                <div className="child-two">
                    <label for="transmission" className="form-label">Transmission <span>*</span></label>
                    <input
                        type= "string"
                        required
                        value={newVehicle.yom}
                        onChange={handleChange}
                        placeholder="transmission"/>
                </div>
             </div>
            <div className="child-container">
            <div className="child-one">
                    <label for="drive" className="form-label">Drive <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="drive"
                        value={newVehicle.drive}
                        onChange={handleChange}
                        placeholder="drive"
                    />
                </div>
                <div className="child-two">
                    <label for="mileage" className="form-label">Mileage <span>*</span></label>
                    <input
                        type="string" 
                        required
                        name="mileage" 
                        value={newVehicle.mileage} 
                        onChange={handleChange}
                        placeholder="mileage"
                    />
                </div>
            </div>
            <div className="child-container">
            <div className="child-one">
                    <label for="category" className="form-label">Catogory <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="category"
                        value={newVehicle.category}
                        onChange={handleChange}
                        placeholder="category"/>
                </div>
                <div className="child-two">
                    <label for="admin_id" className="form-label">Admin Id <span>*</span></label>
                    <input
                        type="string"
                        required
                        name="admin_id"
                        value={newVehicle.admin_id}
                        onChange={handleChange}
                        placeholder="admin id"
                    />
                </div> 
            </div>
            <button type="submit" className="submit">Submit</button>
        </form>
        </div>
        
    )
}

export default NewVehicleForm;