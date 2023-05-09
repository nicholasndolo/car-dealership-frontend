import React, {useState, useEffect} from 'react'
import { FaQuoteRight } from "react-icons/fa";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import './Testimonials.css'


const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [Testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials")
    .then((res) => res.json())
    .then((data) => setTestimonials(data))
  }, [])

   const totalPages = Math.ceil(Testimonials.length / itemsPerPage);

   function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
   }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = Testimonials.slice(startIndex, endIndex);


  return (
    <div className="testimonials">
      <h6>Testimonials</h6>
      <h2>What Our Customers Say</h2>
      <div className="test-container">
      <FaChevronLeft
       className="arrow"
       onClick = {() => {
         currentPage === 1
         ? handlePageChange(totalPages)
          :handlePageChange(currentPage - 1)
       } }
       />
        {currentItems.map((testimonial) => (
      
          <div className="parent">
            <div className="parent-t">
                <div>
                    <img src={testimonial.author_avatar} alt="" className="avatar"/>
                </div>
                <div className="parent-m">
                    <div>
                      <span>{testimonial.author}</span>
                      <span>{testimonial.status}</span>
                    </div>
                    <div>
                      <FaQuoteRight/>
                    </div>
                </div>
            </div>
            <div>
              <p>"{testimonial.testimonial}"</p>
            </div>
          </div>
        ))}
         <FaChevronRight
          className="arrow"
          onClick = {() => {
            currentPage === totalPages
            ? handlePageChange(1)
             :handlePageChange(currentPage + 1)}}
         />
      </div>
    </div>
  )
}

export default Testimonials