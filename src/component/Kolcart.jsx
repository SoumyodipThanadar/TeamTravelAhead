import React from 'react';
import HARIDWAR from '../Img/HARIDWAR.png'
import PURI from '../Img/PURI.jpg'
import DIGHA from '../Img/DIGHA.jpg'
import SUNDARBANS from '../Img/SUNDARBANS.png'
import LONAVALA from '../Img/LONAVALA.jpg'
import { Link } from 'react-router-dom';


const Kolcart = () =>
    {
    return(
        <>
            
            <div className="wholecard">
                <div className="card1"> 
                    <div className="img">
                        <img src={DIGHA} alt={DIGHA} height={'120px'} width={'120px'}></img>
                        <h4>DIGHA</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs. 2500 - 4000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
<Link to="/booknow?destination=Digha">
                        <button className="button">Book Now</button>
                        </Link>
                    
                    </div>
                </div>

                <div className="card1">   
                    <div className="img">
                        <img src={PURI} alt={PURI} height={'120px'} width={'120px'}></img>
                        <h4>PURI</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.5000 - 8000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Puri">
                        <button className="button">Book Now</button>
                        </Link>

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
                    </div>
                </div>

                <div className="card1">    
                    <div className="img">
                        <img src={SUNDARBANS} alt={SUNDARBANS} height={'120px'} width={'120px'}></img>
                        <h4>SUNDARBANS</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.5000 - 8000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Sundarbans">
                        <button className="button">Book Now</button>
                        </Link>


                    </div>
                </div>

                <div className="card1">     
                    <div className="img">
                        <img src={LONAVALA} alt={LONAVALA} height={'120px'} width={'120px'}></img>
                        <h4>LONAVALA</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.9000 - 13000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Lonavala">
                        <button className="button">Book Now</button>
                        </Link>
{/* 
<Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
                    </div>
                </div>

                <div className="card1">       
                    <div className="img">
                        <img src={HARIDWAR} alt={HARIDWAR} height={'120px'} width={'120px'}></img>
                        <h4>HARIDWAR</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.3500 - 6000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Haridwar">
                        <button className="button">Book Now</button>
                        </Link>

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
                    </div>
                </div>  

                
            </div> 
        </>
    )
}






export default Kolcart;