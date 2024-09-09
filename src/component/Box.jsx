import React from 'react';
import { Link } from 'react-router-dom';
import j from '../Img/j.jpg'
import DOARS from '../Img/DOARS.jpg'
import RAJASTHAN from '../Img/RAJASTHAN.jpg'
import SIKKIM from '../Img/SIKKIM.jpg'
import KASHMIR from '../Img/ja.jpg'




const Box = () =>{
    return(
        <>
        <br></br>
            {/* <h1>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            
            Tailored Packages for Your Ultimate Dream Destination
            </h1><br></br> */}

            <div className="title-container">
    <h1>
        Tailored Packages for Your Ultimate Dream Destination
    </h1>
</div>





            <div className="wholecard">
                <div className="card1"> 
                    <div className="img">
                    
                        <img src={j} alt={j} height={'120px'} width={'120px'}></img>
                        
                        <h4>DARJEELING</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs. 3800 - 4500</span>
                        
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

                        {/* <Link to="/booknow">
                        <button className="button">Book Now</button>
                        </Link>  */}
                        <Link to="/booknow?destination=Darjeeling">
  <button className="button">Book Now</button>
</Link>


                        



                    </div>
                </div>

                <div className="card1">   
                    <div className="img">
                        <img src={SIKKIM} alt={SIKKIM} height={'120px'} width={'120px'}></img>
                        <h4>SIKKIM</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.5000 - 7000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

                        {/* <Link to="/booknow">
                        <button className="button">Book Now</button>
                        </Link> */}


                        <Link to="/booknow?destination=Sikkim">
                        <button className="button">Book Now</button>
                        </Link>



                    </div>
                </div>

                <div className="card1">    
                    <div className="img">
                        <img src={DOARS} alt={DOARS} height={'120px'} width={'120px'}></img>
                        <h4>DOOARS</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.3500 - 4800</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 
                        <Link to="/booknow?destination=Doars">
                        <button className="button">Book Now</button>
                        </Link>


                    </div>
                </div>

                <div className="card1">     
                    <div className="img">
                        <img src={KASHMIR} alt={KASHMIR} height={'120px'} width={'120px'}></img>
                        <h4>KASHMIR</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.9000 - 12000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
                        <Link to="/booknow?destination=Kashmir">
                        <button className="button">Book Now</button>
                        </Link>



                    </div>
                </div>

                <div className="card1">       
                    <div className="img">
                        <img src={RAJASTHAN} alt={RAJASTHAN} height={'120px'} width={'120px'}></img>
                        
                        <h4>RAJASTHAN</h4><br></br>
                        <p>6 Days 5 Nights</p>
                        <span>Rs.7000 - 10000</span>
                        <span style = {{textDecoration:'line-through', color:'red', marginLeft:'5px'}}> Rs.50000<span></span></span>
                        <br></br> 

{/* <Link to="/booknow">
<button className="button">Book Now</button>
</Link> */}
<Link to="/booknow?destination=Rajasthan">
                        <button className="button">Book Now</button>
                        </Link>



                    </div>
                </div>  

                
            </div> 

            
        </>
        
    )
}






export default Box;