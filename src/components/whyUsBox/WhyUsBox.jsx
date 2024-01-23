import React from 'react';

import './whyUsBox.scss';

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
    <div className="whyusbox__container">
        <img src={srcHandler(props.src)} alt="whyus_img" className='whyusbox__image'/>
        <div className="whyusbox__container-content">
            <h4 className='whyusbox__header'>{props.header}</h4>
            <p className='whyusbox__paragraph'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default WhyUsBox