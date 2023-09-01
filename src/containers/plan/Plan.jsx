import React from 'react';
import './plan.css';

import ContentBox from '../../components/contentBox/ContentBox';

const Plan = () => {
  return (
    <section className="rental__plan">
      <div className="rental__plan-container">
        <div className="rental__plan-container-header">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
        </div>
        <div className="rental__plan-container-content">
          <div className="rental__plan-container-content_top">

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