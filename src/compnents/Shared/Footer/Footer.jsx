import React, { Fragment } from 'react'
import logo from "file:///E:/food/src/assets/images/res-logo.png"
import { FaTelegramPlane } from "react-icons/fa"
import styling from './Footer.module.css'
const Footer = () => {
return (
    <Fragment>
        <footer >
            <div className={styling.logoFoot}>
                <img src={logo} alt="" />
                <h5>Tasty Treat</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, magnam!</p>
            </div>
            <div >
                
                <ul>
                    <li><h4> Delivery Time</h4></li>
                    <li>Sunday thursday</li>
                    <li>10:00 PM - 11:00 PM</li>
                </ul>
                <ul>
                    <li>Friday saturday</li>
                    <li>off day</li>
                </ul>
            </div>
            <div>
                
                <ul>
                    <li><h4>Contact</h4></li>
                    <li>Location: Mansoura</li>
                    <li>Phone: 011255255</li>
                    <li>Email: d@gmail.com</li>
                </ul>
            </div>
            <div className={styling.srch}>
                <h4>Newseltter</h4>
                <p>subscribe Now</p>
                <input type="email" name="" id="" placeholder='Enter your email' />
                <FaTelegramPlane className={styling.icon} />
                
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer