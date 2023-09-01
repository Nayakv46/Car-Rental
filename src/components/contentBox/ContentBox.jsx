import React from 'react';
import './contentBox.css'

import boxIcon1 from '../../assets/boxicon1.png';
import boxIcon2 from '../../assets/boxicon2.png';
import boxIcon3 from '../../assets/boxicon3.png';

const imgSwitch = (imgSrc) => {
    switch(imgSrc){
        case 'boxIcon1':
            return boxIcon1;
        case 'boxIcon2':
            return boxIcon2;
        case 'boxIcon3':
            return boxIcon3;
        default:
            return null;
    }
    
}

const ContentBox = ({ imgSrc, header, paragraph }) => {
  return (
    <div className="contentBox__container">
        <img src={imgSwitch(imgSrc)} alt="contentBox_img" />
        <div className="contentBox__container-content">
            <h2>{header}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default ContentBox