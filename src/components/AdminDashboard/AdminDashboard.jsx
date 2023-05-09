import React from 'react'
 import Header from '../AdminHeader/Header';
 import ListingTable from '../ListingTable/ListingTable';
 import Search from '../Search/Search';

const AdminDashboard = ({vehicleList,  setVehicleList}) => {
  return (
    <div className="test">
       <Header />
      <Search/> 
       <ListingTable vehicleList={vehicleList}  setVehicleList={setVehicleList}/>
    </div>
  )
}

export default AdminDashboard;