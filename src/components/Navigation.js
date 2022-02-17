import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () =>{
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <h2 className='logo'>Logo</h2>
                <ul onClick={() => setIsMobile(false)} className={isMobile ? "nav-links-mobile" : "nav-links"}>
                    <Link to="/home" className='home'><li>Home</li></Link>
                    <Link to="/about" className='home'><li>About</li></Link>
                    <Link to="/products" className='home'><li>Products</li></Link>
                    <Link to="/contact" className='home'><li>Contact</li></Link>
                    <Link to="/signup" className='signup'><li>SignUp</li></Link>

                </ul>
                <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<i className='fa fa-times'></i>) : (<i className='fa fa-bars'></i>)}
                </button>
            </nav>
        </>
    )
}

export default Navigation;
