// import React from "react";
// import './css/About.css';
// import Footer from "./Footer";
// import { NavLink } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa";


// const About = () => {
//     return (
//        <>
//          <div className="about">
//             <div className="contentgf">
//                 <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
//                     <span><NavLink to={'/'} className={'about-nav'}>Home</NavLink> <span>/</span> <span>About Us</span></span>
//                 </div>
//                 <p style={{textAlign:"justify"}}>
//                    
//                 </p>
//             </div>
//         </div>

//         <div style={{marginTop:'220px'}}>
//             <Footer />
//         </div>
//        </>
//     );
// }

// export default About;







import React from "react";
import './css/About.css';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


const About = () => {
    return (
       <>
         <div className="about">
            <div className="content">
                <div className="breadcrumb">
                    <span><NavLink to="/" className="about-nav"> 
                    Welcome to our TravelAhead website! We are dedicated to providing
                    you with the best travel experiences and adventures. Our team of
                    travel enthusiasts is committed to ensuring that your journey is
                    memorable and enjoyable.</NavLink></span>
                </div>

                <div className="about-section">
                    <div className="right-content">
                        <div className="video-wrapper">
                        {/* <iframe 
    src="https://www.youtube.com/embed/Kc8nzMBrP8s?rel=0" 
    frameBorder="0" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
    className="about-video">
</iframe> */}
<video 
    controls 
    className="about-video">
    <source src="/Videos/wt.mp4" type="video/mp4" />
    
</video>




                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        <div className="Arpan">
            <p>Welcome to TravelAhead!<br></br><br></br>

At TravelAhead, we are passionate about making your travel dreams come true. Our team of dedicated travel experts is committed to providing you with exceptional service and unforgettable experiences.<br></br><br></br>

Our Mission:<br></br><br></br>

Our mission is to help you explore the world with ease and joy. Whether you're seeking a relaxing beach vacation, an adventurous hiking trip, or a cultural city tour, we strive to offer personalized travel solutions that cater to your needs and preferences.
<br></br><br></br>
Why Choose Us:<br></br><br></br>

◘ Expert Guidance: Our experienced travel consultants have extensive knowledge of the best destinations, accommodations, and activities. We work closely with you to create a customized itinerary that matches your interests and budget.<br></br><br></br>
◘ Exceptional Service: From planning to booking and beyond, we are here to support you every step of the way. Our dedicated customer service team is available to assist you with any queries or concerns.<br></br><br></br>
◘ Unforgettable Experiences: We believe that travel should be more than just a trip – it should be a memorable adventure. Our curated travel packages are designed to offer unique experiences that you'll cherish for years to come.<br></br><br></br>
Get in Touch:<br></br><br></br>

We’d love to hear from you! Whether you have a question about our services or need assistance planning your next adventure, feel free to reach out to us at support@travelahead.com.<br></br><br></br>

Thank you for choosing tour and travel. We look forward to helping you embark on your next journey!<br></br>

</p>
        </div>

         <Footer />  
       </>
    );
}

export default About;







