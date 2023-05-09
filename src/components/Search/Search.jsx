import React from 'react'
import {Link} from 'react-router-dom'
import {MdSearch} from "react-icons/md";
import {BsFunnel} from "react-icons/bs";
import "./Search.css"

const Search = () => {
  return (
    <div className="search">
      <div className="search-l">
        <div className='box-one'>
          <MdSearch />
          <input
           type="text"
           placeholder="Search inventory..." />
        </div>
        <div className="box-two">
          < BsFunnel/>
           <input
            type="text"
            placeholder="Filter"
             />
        </div>
      </div>
      <div className="search-r">
        <Link to="/dashboard/postcar"className="bttn">Add Car</Link>
      </div>
    </div>
  )
}

export default Search