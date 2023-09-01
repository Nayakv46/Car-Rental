import React from 'react';

import './reviewBox.css'

import { FaQuoteRight } from 'react-icons/fa';

import testimonialimg1 from '../../assets/testimonialimg1.png';

import testimonialimg2 from '../../assets/testimonialimg2.png';




const ReviewBox = (props) => {

    const imgHandler = (imgId) => {
        switch(imgId){
            case "1":
                return testimonialimg1;
            case "2":
                return testimonialimg2;
            default:
                return null;
        }
    }


  return (
    <div className="review-box">
        <p>" {props.review} "</p>
        <div className="review-box_profile">
            <img src={imgHandler(props.img)} alt="profile-img" />
            <div className="review-box_profile-content">
                <div className="review-box_profile-content_info">
                    <h3>{props.name}</h3>
                    <p>{props.location}</p>
                </div>
                <FaQuoteRight size={32} />
            </div>
        </div>
    </div>
  )
}

export default ReviewBox