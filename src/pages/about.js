import React from 'react';
import './about.css';

import { Footer, Navbar, PageNamer, ContactBanner } from '../components';

import abouticon1 from '../assets/about-icon1.png';
import abouticon2 from '../assets/about-icon2.png';
import abouticon3 from '../assets/about-icon3.png';



import { Plan } from '../containers';

import aboutimg from '../assets/about-img.jpg'

const About = () => {
  return (
    <>
    <Navbar />
    <PageNamer pageName="About" />
    <section className="rental__about">
      <div className="rental__about-content">
        <img src={aboutimg} alt="about-img" />
        <div className="rental__about-content_text">
          <h3>About Company</h3>
          <h2>You start the engine and your adventure begins</h2>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className="rental__about-content_text-icons">
            <div className="rental__about-content_text-icons_content">
              <img src={abouticon1} alt="icon-img" />
              <div className="rental__about-content_text-icons_content-text">
                <h2>20</h2>
                <p>Car Types</p>
              </div>
            </div>

            <div className="rental__about-content_text-icons_content">
              <img src={abouticon2} alt="icon-img" />
              <div className="rental__about-content_text-icons_content-text">
                <h2>85</h2>
                <p>Rental Outlets</p>
              </div>
            </div>

            <div className="rental__about-content_text-icons_content">
              <img src={abouticon3} alt="icon-img" />
              <div className="rental__about-content_text-icons_content-text">
                <h2>75</h2>
                <p>Repair Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Plan />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default About