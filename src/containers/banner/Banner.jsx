import React from 'react'
import './banner.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2 className='banner__header'>Save big with our cheap car rental!</h2>
        <p className='banner__text'>Top Airports. Local Suppliers. <span className='banner__text-emphasis'>24/7</span> Support</p>
      </div>
    </section>
  )
}

export default Banner