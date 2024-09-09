// import React from "react";
// import './css/Gallery.css';
// import Footer from "./Footer";
// import { NavLink } from "react-router-dom";

// const Gallery = () => {
//     return (
//        <>
//          <div className="gallery">
//             <div className="contentew">
//                 <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
//                     <span><NavLink to={'/'} className={'gallery-nav'}>Home</NavLink> <span>/</span> <span>Gallery</span></span>
//                 </div>
                
//             </div>
//         </div>

//         <div style={{marginTop:'220px'}}>
//             <Footer />
//         </div>
//        </>
//     );
// }

// export default Gallery;




// import './css/Gallery.css';
// import Footer from "./Footer";
// import { NavLink } from "react-router-dom";


// const Gallery = () => {
//     return (
//        <>
//          <div className="gallery">
//             <div className="contentessw">
//                 <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
//                     <span><NavLink to={'/'} className={'gallery-navxx'}>Home</NavLink> <span>/</span> <span>Gallery</span></span>
//                 </div>

//                 {/* Adding a video before the gallery grid */}
//                 <div className="video-container" style={{margin: '20px 0'}}>
//                     <video controls autoPlay loop muted width="100%">
//                         <source src="/IMG/videoe.mp4" type="video/mp4" />
                        
//                     </video>
//                 </div>

//                 <div className="gallery-gridx">
//                     <div className="gallery-item"><img src="/IMG/imagea.jpg" alt="Gallery Item 1" />
//                     <div className="place-name">Mumbai</div>
//                     </div>
//                     <div className="gallery-item"><img src="/IMG/w.jpg" alt="Gallery Item 2" /><div className="place-name">Darjeeling</div></div>
//                     <div className="gallery-item"><img src="/IMG/dal.jpg" alt="Gallery Item 3" /></div>
//                     <div className="gallery-item"><img src="/IMG/pal.png" alt="Gallery Item 4" /></div>
//                     <div className="gallery-item"><img src="/IMG/pne.jpg" alt="Gallery Item 5" /></div>
//                     <div className="gallery-item"><img src="/IMG/sii.jpg" alt="Gallery Item 6" /></div>
//                     <div className="gallery-item"><img src="/IMG/cor.jpg" alt="Gallery Item 7" /></div>
//                     <div className="gallery-item"><img src="/IMG/e.jpg" alt="Gallery Item 8" /></div>
//                     <div className="gallery-item"><img src="/IMG/mu.jpg" alt="Gallery Item 9" /></div>
//                     <div className="gallery-item"><img src="/IMG/jim.jpg" alt="Gallery Item 10" /></div>
//                     <div className="gallery-item"><img src="/IMG/jal.jpg" alt="Gallery Item 11" /></div>
//                     <div className="gallery-item"><img src="/IMG/kazi.jpg" alt="Gallery Item 12" /></div>
//                     <div className="gallery-item"><img src="/IMG/da.jpeg" alt="Gallery Item 13" /></div>
//                     <div className="gallery-item"><img src="/IMG/kan.jpg" alt="Gallery Item 14" /></div>
//                     <div className="gallery-item"><img src="/IMG/download.jpeg" alt="Gallery Item 15" /></div>
//                     <div className="gallery-item"><img src="/IMG/kur.jpeg" alt="Gallery Item 16" /></div>
//                 </div>
//             </div>
//         </div>

//         <div style={{marginTop:'320px'}}>
//             <Footer />
//         </div>
//        </>
//     );
// }

// export default Gallery;

import './css/Gallery.css';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Gallery = () => {
    return (
       <>
         <div className="gallery">
            <div className="contentessw">
                <div style={{borderBottom:'0.1px solid #EEE', paddingBottom:'10px'}}>
                    <span><NavLink to={'/'} className={'gallery-navxx'}>Home</NavLink> <span>/</span> <span>Gallery</span></span>
                </div>

                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                


                Kalka to Shimla Toy Train</h1>
                <div className="video-container" style={{margin: '20px 0'}}>
                    <video controls autoPlay loop muted width="100%">
                        <source src="/IMG/videoe.mp4" type="video/mp4" />
                        
                    </video>
                </div>

                <div className="gallery-gridx">
                    <div className="gallery-item">
                        <img src="/IMG/imagea.jpg" alt="Gallery Item 1" />
                        <div className="place-name">Mumbai, Maharastra</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/w.jpg" alt="Gallery Item 2" />
                        <div className="place-name">Darjeeling, West Bengal</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/dal.jpg" alt="Gallery Item 3" />
                        <div className="place-name">Dal Lake, Kashmir</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/pal.png" alt="Gallery Item 4" />
                        <div className="place-name">Gangtok, Sikkim</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/pne.jpg" alt="Gallery Item 5" />
                        <div className="place-name">Otty, Tamil Naidu</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/sii.jpg" alt="Gallery Item 6" />
                        <div className="place-name">Nanital, Uttarakhand</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/cor.jpg" alt="Gallery Item 7" />
                        <div className="place-name">Sevoke, West Bengal</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/e.jpg" alt="Gallery Item 8" />
                        <div className="place-name">Teesta Valley Forest, WB</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/mu.jpg" alt="Gallery Item 9" />
                        <div className="place-name">Mussoorie, Uttarakhand</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/jim.jpg" alt="Gallery Item 10" />
                        <div className="place-name">Jim Corbett National Park</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/jal.jpg" alt="Gallery Item 11" />
                        <div className="place-name">Jaldapara National Park</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/kazi.jpg" alt="Gallery Item 12" />
                        <div className="place-name">Kaziranga National Park</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/da.jpeg" alt="Gallery Item 13" />
                        <div className="place-name">Tea Gardens in Assam</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/kan.jpg" alt="Gallery Item 14" />
                        <div className="place-name">Tiger Hill, Drajeeling</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/download.jpeg" alt="Gallery Item 15" />
                        <div className="place-name">Phewa Tal, Nepal</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/IMG/kur.jpeg" alt="Gallery Item 16" />
                        <div className="place-name">Kurseong, West Bengal</div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{marginTop:'320px'}}>
            <Footer />
        </div>
       </>
    );
}

export default Gallery;




