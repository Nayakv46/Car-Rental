import React from 'react';
import './download.css';

import googleButton from '../../assets/download-button_google.svg';

import appleButton from '../../assets/download-button_apple.svg';

const Download = () => {
  return (
    <section className="rental__download">
      <div className="rental__download-content">
        <h2>Download our app to get most out of it</h2>
        <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
        <div className="rental__download-content_buttons">
          <img src={googleButton} alt="google_play_img" />
          <img src={appleButton} alt="apple_store_img" />
        </div>
      </div>
    </section>
  )
}

export default Download