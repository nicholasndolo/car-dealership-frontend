
import Categories from '../Categories/Categories';
import Hero from '../Hero/Hero';
import Listings from '../Listings/Listings';
import Navbar from '../Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import './HomePage.css'


function HomePage({vehicleList}) {

  
  
  return (
    <div className="home">
      <Navbar/>
      <Hero/>
      <Categories vehicleList={vehicleList}/>
      <Listings vehicleList={vehicleList}/>
      <ContactUs/>
      <Testimonials vehicleList={vehicleList}/>
      <Footer />  
       
    </div>
  );
}

export default HomePage;