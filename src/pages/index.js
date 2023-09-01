import React from 'react';

import { Footer, Navbar } from '../components';
import { Banner, Booking, Download, FAQ, Home, Pick, Plan, WhyUs, Testimonials } from '../containers';

const Main = () => {
  return (
    <>
        <Navbar />
        <Home />
        <Booking />
        <Plan />
        <Pick />
        <Banner />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Download />
        <Footer />
    </>
  )
}

export default Main