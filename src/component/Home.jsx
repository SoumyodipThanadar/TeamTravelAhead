// import React, {useEffect}  from "react";
// import 'aos/dist/aos.css';
// import { NavLink } from "react-router-dom";
// import Box from "./Box";
// import Footer from "./Footer";

// const Home = () => {
    
//     useEffect(() => {
//         import('aos').then((AOS) => {
//           AOS.init({
//             duration: 1000, 
//             easing: 'ease-in-out', 
//             once: true, 
//           });
//         });
//       }, []);

//     return (
//         <>
//             <div className="home">
//                 <h1>Explore the World with Us</h1>
//                 <p data-aos="fade-down">Your adventure starts here. Discover new places, enjoy exclusive tours, and create unforgettable memories.</p>
//                 <NavLink to={'/Booknow'}><button>Book Now</button></NavLink>  
//             </div>
//             <Box />

//             <Footer />
//         </>

//     );
// }

// export default Home



import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import Box from "./Box";
import Footer from "./Footer";
import Boxee from "./Boxee"; 
import Kolcart from "./Kolcart";
// import Booknow from "./Booknow";
// import Reel from "./component/Reel";
import Reel from "./Reel";
import Eco from "./Eco";




const Home = () => {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
    });
  }, []);

  return (
    <>
      <div className="home">
        {/* Bootstrap Carousel */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./IMG/image1k.jpg" className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image2.jpg" className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image3.png" className="d-block w-100" alt="Image 3" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image4.jpg" className="d-block w-100" alt="Image 4" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image5.jpg" className="d-block w-100" alt="Image 5" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image6.jpg" className="d-block w-100" alt="Image 6" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image7.jpg" className="d-block w-100" alt="Image 7" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image8.jpg" className="d-block w-100" alt="Image 8" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image9.jpg" className="d-block w-100" alt="Image 9" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image10.jpg" className="d-block w-100" alt="Image 10" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image11.jpg" className="d-block w-100" alt="Image 11" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image12.jpg" className="d-block w-100" alt="Image 12" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image13.jpg" className="d-block w-100" alt="Image 13" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image14.jpg" className="d-block w-100" alt="Image 14" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image15.jpg" className="d-block w-100" alt="Image 15" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image16.jpg" className="d-block w-100" alt="Image 16" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image17.jpg" className="d-block w-100" alt="Image 17" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image18.jpg" className="d-block w-100" alt="Image 18" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image19.jpg" className="d-block w-100" alt="Image 19" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image20.jpg" className="d-block w-100" alt="Image 20" />
            </div>
            <div className="carousel-item">
              <img src="./IMG/image21.jpg" className="d-block w-100" alt="Image 21" />
            </div>


          </div>
        </div>

        {/* Text content */}
        <div className="home-content">
          <h1>Explore the World with Us</h1>
          <h2>TravelAhead</h2>
          <p data-aos="fade-down">Your adventure starts here. Discover new places, enjoy exclusive tours, and create unforgettable memories.</p>
          <NavLink to={'/Booknow'}><button>Book Now</button></NavLink>
          
        </div>
        
      </div>
      <Box />
      <Boxee />
      <Kolcart />
      <Reel /> 
      <Eco />
      <Footer />

      
      
      
    </>
  );
}

export default Home;






