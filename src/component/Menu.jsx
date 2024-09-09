
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav>
                    <ul>
                        <li><NavLink to={''} className={'nav'}>Home</NavLink></li>
                        <li><NavLink to={'/about'} className={'nav'}>About Us</NavLink></li>
                        <li><NavLink to={'gallery'} className={'nav'}>Gallery</NavLink></li>
                        
                        <li><NavLink to={'tour'} className={'nav'}>Tours</NavLink></li>
                        <li><NavLink to={'/contact'} className={'nav'}>Help & Support</NavLink></li>
                        
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menu;
