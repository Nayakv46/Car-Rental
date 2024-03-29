import React from 'react';
import './faq.scss';

import QuestionBox from '../../components/questionBox/QuestionBox';

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq__content">
        <div className="faq__content-header">
          <h4 className='faq__shortName'>FAQ</h4>
          <h2 className='faq__longName'>Frequently Asked Questions</h2>
          <p className='faq__text'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <div className="faq__content-questions">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
          <QuestionBox 
            id="1" 
            question="What is special about comparing rental car deals?" 
            answer="Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies." 
          />
          <QuestionBox 
            id="2" 
            question="How do I find the car rental deals?" 
            answer="You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions." 
          />
          <QuestionBox 
            id="3" 
            question="Gow do I find such low rental car prices?" 
            answer="Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices." 
          />
        </div>
      </div>
    </section>
  )
}

export default FAQ