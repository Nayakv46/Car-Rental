import React from 'react';

import './contact.css';
import { Footer, Navbar, PageNamer, ContactBanner } from '../components';

import { BsTelephoneFill } from 'react-icons/bs';

import { IoMdMail} from 'react-icons/io';

import { FaLocationDot, FaEnvelopeOpenText } from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
    <Navbar />
    <PageNamer pageName="Contact" />
    <section className="rental__contact">
      <div className="rental__contact-content_left">
        <h2>Need additional information?</h2>
        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <ul>
          <li><a href="/"><BsTelephoneFill /> +48 123 456 789</a></li>
          <li><a href="/"><IoMdMail size={20} /> carrental@carmail.com</a></li>
          <li><a href="/"><FaLocationDot size={20} /> Opole, Poland</a></li>
        </ul>
      </div>

      <div className="rental__contact-content_right">
        <form>

          <label>Full Name <b>*</b></label>
          <input type="text" placeholder="e.g: John Smith" />
          <label>Email <b>*</b></label>
          <input type="email" placeholder="youremail@example.com" />
          <label>Tell us about it <b>*</b></label>
          <textarea placeholder="Write here..." />
          <button type="button"><FaEnvelopeOpenText size={22} /> Send Message</button>
        </form>
      </div>
    </section>
    <ContactBanner />
    <Footer />
    </>
  )
}

export default Contact