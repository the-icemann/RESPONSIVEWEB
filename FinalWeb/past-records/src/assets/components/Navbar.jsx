/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../images/Screenshot 2024-12-05 225227.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="relative container mx-auto p-3">
            <div className="flex items-center justify-between">
                
                <div className="pt-2">
                    <img src={logo} alt="logo-goes-here" width={100} />
                </div>

                
                <div className="hidden space-x-12 md:flex">
                   <Link to='/About'>About</Link> 
                   <Link to='/Programs'>Programs</Link> 
                   <Link to='/ContactUsPage'>Contact Us</Link>
                    
                </div>

                
                <a
                    href=""
                    className="hidden p-3 px-6 pt-2 text-white bg-slate-600 rounded-full md:block"
                >
                    Donate
                </a>

                
                <button
                    id="menu-btn"
                    onClick={handleMenuToggle} 
                    className={`hamburger md:hidden focus:outline-none ${isMenuOpen ? 'open' : ''}`}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            
            <div className="md:hidden">
                <div
                    id="menu"
                    className={`absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-gray-100 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >  <Link to='/About'>About</Link> 
                <Link to='/Programs'>Programs</Link> 
                <Link to='/ContactUsPage'>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
