import React from 'react';
import './whyus.css';

import whyus_topbg from '../../assets/whyus_topbg.png';

import { FaChevronRight } from 'react-icons/fa';

import WhyUsBox from '../../components/whyUsBox/WhyUsBox';

const WhyUs = () => {
  return (
    <section className="rental__whyus">
      <div className="rental__whyus-container">
        <img src={whyus_topbg} alt="top_img" />
        <div className="rental__whyus-container_content">
          <div className="rental__whyus-container_content-left">
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <a href="#home">
              <button className="details-button">
              Find Details <FaChevronRight />
              </button>
            </a>
          </div>
          <div className="rental__whyus-container_content-right">
            <WhyUsBox src="1" 
              header="Cross Country Drive" 
              paragraph="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures." 
            />
            <WhyUsBox src="2" 
              header="All Inclusive Pricing" 
              paragraph="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy." 
            />
            <WhyUsBox src="3" 
              header="No Hidden Charges" 
              paragraph="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing." 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs