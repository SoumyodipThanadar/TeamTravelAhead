import React from 'react';
import { Link } from 'react-router-dom';
import MANALI from '../Img/MANALI.jpg'
import MEGHALAYA from '../Img/MEGHALAYA.jpg'
import NANITAL from '../Img/NANITAL.jpg'
import OOTY from '../Img/OOTY.jpg'
import KANYAKUMARI from '../Img/KANYAKUMARI.jpg'
import SUNDARBANS from '../Img/SUNDARBANS.png'



const Boxee = () =>{
    return(
        <>
            
            <div className="wholecard">
                <div className="card1"> 
                    <div className="img">
                        <img src={NANITAL} alt={NANITAL} height={'120px'} width={'120px'}></img>
                        <h4>NAINITAL</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs. 4000 - 8000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
<Link to="/booknow?destination=Nanital">
                        <button className="button">Book Now</button>
                        </Link>


                    </div>
                </div>

                <div className="card1">   
                    <div className="img">
                        <img src={MANALI} alt={MANALI} height={'120px'} width={'120px'}></img>
                        <h4>MANALI</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.7500 - 8500</span>
                        
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
<Link to="/booknow?destination=Manali">
                        <button className="button">Book Now</button>
                        </Link>


                    </div>
                </div>

                <div className="card1">    
                    <div className="img">
                        <img src={OOTY} alt={OOTY} height={'120px'} width={'120px'}></img>
                        <h4>OOTY</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.6000 - 9500</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}

<Link to="/booknow?destination=Ooty">
                        <button className="button">Book Now</button>
                        </Link>
                    </div>
                </div>

                <div className="card1">     
                    <div className="img">
                        <img src={MEGHALAYA} alt={MEGHALAYA} height={'120px'} width={'120px'}></img>
                        <h4>MEGHALAYA</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.8500 - 14500</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
<Link to="/booknow?destination=Meghalaya">
                        <button className="button">Book Now</button>
                        </Link>



                    </div>
                </div>

                <div className="card1">       
                    <div className="img">
                        <img src={KANYAKUMARI} alt={KANYAKUMARI} height={'120px'} width={'120px'}></img>
                        <h4>KANYAKUMARI</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.8000 - 9500</span>
                        
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Kanyakumari">
                        <button className="button">Book Now</button>
                        </Link>


                    </div>
                </div>  

                
            </div> 
        </>
    )
}






export default Boxee;