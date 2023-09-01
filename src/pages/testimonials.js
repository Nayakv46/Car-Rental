import React from 'react';

import { Footer, Navbar, PageNamer, ContactBanner } from '../components';


import { Testimonials } from '../containers';
const TestimonialsPage = () => {
  return (
    <>
    <Navbar />
    <PageNamer pageName="Testimonials" />
    <Testimonials />
    <ContactBanner />
    <Footer />
    </>
  )
}

export default TestimonialsPage