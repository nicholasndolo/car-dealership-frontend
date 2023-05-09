import React,{ useState } from 'react'
import './Categories.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {motion} from "framer-motion"

const Categories = ({vehicleList}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const transition = {type: 'spring', duration: 3};


  const uniqueCategories = Array.from(new Set(vehicleList.map(car => car.category)));
  const uniqueCars = uniqueCategories.reduce((acc, category) => {
    const car = vehicleList.find(car => car.category === category);
    return car ? [...acc, car] : acc;
  }, []);

  const totalPages = Math.ceil(uniqueCars.length / itemsPerPage);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = uniqueCars.slice(startIndex, endIndex);
  let diff =  itemsPerPage - currentItems.length;
   const  display = diff === 0
          ? currentItems
          : [...currentItems, ...uniqueCars.slice(0, diff)]
  


  return (
    <div className="categories">
        <div className="categories-header">
            <h3>Category</h3>
            <div>
              <span className="stroke-text">Find The </span>
              <span>Best Car </span>
              <span className="stroke-text">For You</span>
            </div>
            <div
             className="cats"
              >
              <FaChevronLeft onClick={() => {
                currentPage === 1
                ?  handlePageChange(totalPages)
                : handlePageChange(currentPage-1)
              }} />
              {display.map((cat)=>(
                <motion.div className="card"  initial={{opacity:0, x: 100}}
                animate={{opacity:1, x: 0}}
                exit={{opacity:0, x: -100}}
                transition={transition}>
                  <motion.img
                  initial={{opacity:0, x: 100}}
                  animate={{opacity:1, x: 0}}
                  exit={{opacity:0, x: -100}}
                  transition={transition}
                   src={cat.image} alt="" />
                  <div>{cat.category}</div>
                </motion.div>
              ))}
               <FaChevronRight onClick={() => {
                 currentPage === totalPages
                 ? handlePageChange(1)
                 : handlePageChange(currentPage + 1);
               }}/>
            </div>
        </div>
        
    </div>
  )
}

export default Categories