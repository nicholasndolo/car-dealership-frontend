import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UpdateVehicle from './components/UpdateVehicle/UpdateVehicle';
import NewVehicleForm from './components/NewVehicleForm/NewVehicleForm'
import HomePage from './components/HomePage/HomePage';



function App() {

  const [vehicleList, setVehicleList] = useState([])
  const [user, setUser] = useState(null)


  useEffect(()=> {
    fetch("/vehicles")
    .then((res) => res.json())
    .then((data) =>  setVehicleList(data))
}, [])

//   useEffect(()=> {
//     fetch("/me").then((res) => {
//       if(res.ok){
//         res.json().then(user => setUser(user))
//       }
//     })
// }, [])

// if (!user) return <Login onLogin={setUser} />;

// useEffect(() => {
//   axios.all([
//     axios.get('/vehicles'),
//     axios.get('/me')
//   ])
//   .then(res => res[0].json());
//   .then((data) => setVehicleList(data));
// })

function handleAddVehicle(newVehicle) {
  setVehicleList([...vehicleList, newVehicle])
}

function handleItemUpdate(updatedItem){
  const updatedVehicleList =vehicleList.map((vehicle) => {
    if(vehicle.id === updatedItem.id){
      return updatedItem
    }else{
      return vehicle
    }
  });
  setVehicleList(updatedVehicleList);
}

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage vehicleList={vehicleList}/> } ></Route>
          <Route exact path="/dashboard" element={<AdminDashboard vehicleList={vehicleList} setVehicleList={setVehicleList}/> } ></Route>
          <Route exact path="/dashboard/postcar" element={<NewVehicleForm handleAddVehicle={handleAddVehicle}/> } ></Route>
          <Route exact path="/:carId" element={<UpdateVehicle handleAddVehicle={handleAddVehicle}   onUpdatedItem={handleItemUpdate}/> } ></Route>
          <Route exact path="/login" element={<Login onLogin={setUser}/> } ></Route>
        </Routes>
        
      </Router>
        
    </div>
  );
}

export default App;