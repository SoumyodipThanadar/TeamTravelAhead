// import React from "react";

// const Tours = () => {
//     return (
//         <div className="tours">
//             <h1>Our Tours</h1>
//             <p>Explore our exclusive tours designed to give you the best travel experience.</p>
//             <ul type="square">
//                <li>DARJEELING</li>
//                <li>SIKKIM</li>
//              <li>DOARS</li>
//            </ul>
            
//         </div>
//     );
// }

// export default Tours;

import React from "react";
import './css/Tour.css';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Box from "./Box";
import Boxee from "./Boxee";
import Kolcart from "./Kolcart";
import Tourchat from "./Tourchat"

const Tour = () => {
    return (
       <>
         <div className="tour">
            <div className="contenteee">
                <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
                    <span><NavLink to={'/'} className={'tour-nav'}>Home</NavLink> <span>/</span> <span>Tours</span></span>
                </div>
                <p style={{textAlign:"justify"}}>
                    
                </p>
                <Tourchat />
                <Box />
                <Boxee />
                <Kolcart />
            </div>
        </div>

        <div style={{marginTop:'220px'}}>
            <Footer />
        </div>
       </>
    );
}

export default Tour;






