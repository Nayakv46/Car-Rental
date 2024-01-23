import React from 'react'
import './contactBanner.scss';

import { BsTelephoneFill } from 'react-icons/bs';

const ContactBanner = () => {
  return (
    <section className="contact-banner">
        <div className="contact-banner__content">
            <h2 className='contact-banner__title'>Book a car by getting in touch with us</h2>
            <span className='contact-banner__phone'><BsTelephoneFill size={30} /> +48 123-456-789</span>
        </div>
    </section>
  )
}

export default ContactBanner