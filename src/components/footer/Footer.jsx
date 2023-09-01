import React from 'react'
import './footer.css';

import { BsTelephoneFill } from 'react-icons/bs';

import { IoMdMail } from 'react-icons/io';



const Footer = () => {
  return (
    <section className="rental__footer">
      <div className="rental__footer-content">
        <div className="rental__footer-content_info">
          <ul>
            <li><span>CAR</span> Rental</li>
            <li>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
            <li><a href="tel:123456789">
             <BsTelephoneFill /> +48 123-456-789</a></li>
            <li><a href="mailto:carrental@gmail.com">
              <IoMdMail size={20}/> carrental@gmail.com</a></li>
            <li><p>Design by XpeedStudio</p></li>
          </ul>

        </div>
        
        <div className="rental__footer-content_company">
          <ul>
            <li>COMPANY</li>
            <li><a href="#top">New York</a></li>
            <li><a href="#top">Careers</a></li>
            <li><a href="#top">Mobile</a></li>
            <li><a href="#top">Blog</a></li>
            <li><a href="#top">How we work</a></li>
          </ul>
        </div>
        
        <div className="rental__footer-content_hours">
          <ul>
            <li>WORKING HOURS</li>
            <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
            <li>Sat: 9:00 AM - 19:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        <div className="rental__footer-content_subscription">
          <ul>
            <li>SUBSCRIPTION</li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li><input type="text" placeholder="Enter Email Address" /></li>
            <li><button type="button">Submit</button></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer