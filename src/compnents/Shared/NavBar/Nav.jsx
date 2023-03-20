import React, { Fragment, useState } from 'react'
import { RiShoppingBasketLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Nav.css'
import { Link } from 'react-router-dom';
import logo from "file:///E:/food/src/assets/images/res-logo.png"
const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <Fragment>
            <nav className=''>
                <div className="logoDiv">
                    <img src={logo}className="logo "alt="" />
                    <h5>Tasty Treat</h5>
                </div>
                <button className='bg-danger toggle' onClick={handleShowNavbar}>
                    {showNavbar ? <AiOutlineClose /> : <GiHamburgerMenu />}                   
                </button>
                <div className={showNavbar ? "mobile_links":"nav_links"} onClick={()=>{setShowNavbar(false)}}>
                    <ul>
                        <li><Link to="/" className='List_Link'>Home</Link></li>
                        <li> <Link to="/foods" className='List_Link'>Foods</Link></li>
                        <li><Link to="/cart" className='List_Link'>Cart</Link></li>
                        <li><Link to="/contact"className='List_Link'>Contact</Link></li>
                    </ul>

                    <ul className=''>
                        <li><RiShoppingBasketLine /><span className='span2'>0</span></li>
                        <li><BsPerson /></li>
                    </ul>
                </div>

            </nav>

        </Fragment>
    )
}

export default Nav