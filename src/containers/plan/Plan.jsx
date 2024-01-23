import React from 'react';
import './plan.scss';

import ContentBox from '../../components/contentBox/ContentBox';

const Plan = () => {
  return (
    <section className="plan">
      <div className="plan__container">
        <div className="plan__header">
          <h4 className='plan__header-title'>Plan your trip now</h4>
          <h2 className='plan__header-text'>Quick & easy car rental</h2>
        </div>
        <div className="plan__content">
          <div className="plan__content-top">

            <ContentBox imgSrc="boxIcon1" header="Select Car" paragraph="We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs" />
            <ContentBox imgSrc="boxIcon2" header="Contact Operator" paragraph="Our knowledgeable and friendly operators are always ready to help with any questions or concerns" />

          </div>

          <ContentBox imgSrc="boxIcon3" header="Let's Drive" paragraph="Whether you're hitting the open road, we've got you covered with our wide range of cars" />

        </div>
      </div>
    </section>
  )
}

export default Plan