import React from 'react';

import './reviewBox.scss'

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
    <div className="reviewBox">
        <p className='reviewBox__text'>" {props.review} "</p>
        <div className="reviewBox__profile">
            <img src={imgHandler(props.img)} alt="profile-img" className='reviewBox__profile-image'/>
            <div className="reviewBox__profile-content">
                <div className="reviewBox__profile-info">
                    <h3 className='reviewBox__profile-name'>{props.name}</h3>
                    <p className='reviewBox__profile-location'>{props.location}</p>
                </div>
                <FaQuoteRight size={32} />
            </div>
        </div>
    </div>
  )
}

export default ReviewBox