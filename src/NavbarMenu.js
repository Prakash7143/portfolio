import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import {Nav, NavLink, Bars, NavMenu,  NavBtn, NavBtnLink, NavMobile,NavLinkMobile } from './NavItems';

const NavbarMenu = () =>{
    const [extendNavbar, setExtendNavbar] = useState(false)
    return(
        <>
            <Nav extendNavbar={extendNavbar}>
                <NavLink to="/"><h1>LOgo</h1></NavLink>
                <Bars onClick={() =>{ setExtendNavbar((curr) => !curr); }}>
                    {extendNavbar ?<>&#10005;</>  :<>&#8801;</>}
                </Bars>
                <NavMenu>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
                { extendNavbar &&(<NavMobile>
                    <NavLinkMobile to="/about">About</NavLinkMobile>
                    <NavLinkMobile to="/services">Services</NavLinkMobile>
                    <NavLinkMobile to="/contact">Contact</NavLinkMobile>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavMobile>)
                }
            </Nav>
        </>
    )
}

export default NavbarMenu;