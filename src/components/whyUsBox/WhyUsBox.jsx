import React from 'react';

import './whyUsBox.css';

import whyusicon1 from '../../assets/whyusicon1.png';
import whyusicon2 from '../../assets/whyusicon2.png';
import whyusicon3 from '../../assets/whyusicon3.png';


const WhyUsBox = (props) => {

  const srcHandler = (src) => {
    switch(src){
        case '1':
            return whyusicon1;
        case '2':
            return whyusicon2;
        case '3':
            return whyusicon3;
        default:
            return null;
    }
  }

  return (
    <div className="whyusbox_container">
        <img src={srcHandler(props.src)} alt="whyus_img"/>
        <div className="whyusbox_container-content">
            <h4>{props.header}</h4>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default WhyUsBox