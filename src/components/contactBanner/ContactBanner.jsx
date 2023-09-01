import React from 'react'
import './contactBanner.css';

import { BsTelephoneFill } from 'react-icons/bs';

const ContactBanner = () => {
  return (
    <section className="contact_banner">
        <div className="contact_banner-content">
            <h2>Book a car by getting in touch with us</h2>
            <span><BsTelephoneFill size={30} /> +48 123-456-789</span>
        </div>
    </section>
  )
}

export default ContactBanner