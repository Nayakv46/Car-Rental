import React from 'react';
import './testimonials.scss';

import ReviewBox from '../../components/reviewBox/ReviewBox';

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="testimonials__content">
            <div className="testimonials__header">
                <h4 className='testimonials__header-title'>Reviewed by People</h4>
                <h2 className='testimonials__header-name'>Client's Testimonials</h2>
                <p className='testimonials__header-text'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            
            <div className="testimonials__reviews">
                <ReviewBox img="2" review="With their prices and service they provide, this is the best option. I had the pleasure to talk with real angels working at the customer service!" name="Barry Seal" location="Winchester" />
                <ReviewBox img="1" review="Car I have rented through this website was great. It was clean and the job was done thoroughly, exactly the way real Agent 47 would like it. " name="Not Agent 47" location="London" />
            </div>

        </div>
    </section>
  )
}

export default Testimonials