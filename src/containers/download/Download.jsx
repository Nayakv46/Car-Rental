import React from 'react';
import './download.scss';

import googleButton from '../../assets/download-button_google.svg';

import appleButton from '../../assets/download-button_apple.svg';

const Download = () => {
  return (
    <section className="download">
      <div className="download__content">
        <h2 className='download__title'>Download our app to get most out of it</h2>
        <p className='download__text'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div className="download__content-buttons">
          <img className='download__buttons-image' src={googleButton} alt="google_play_img" />
          <img className='download__buttons-image' src={appleButton} alt="apple_store_img" />
        </div>
      </div>
    </section>
  )
}

export default Download