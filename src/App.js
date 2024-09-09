import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import Booknow from './component/Booknow';
import Tour from './component/Tour';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TermsOfService from "./component/TermsOfService";
import PrivacyPolicy from "./component/PrivacyPolicy";





function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            
            <Route path='/gallery' element={<Gallery />}></Route>
            

            <Route path='/tour' element={<Tour />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route exact path='/Booknow' element={<Booknow />}></Route>
            <Route path="/termsofservice" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          
        </BrowserRouter>
        
    </div>
  );
}

export default App;
