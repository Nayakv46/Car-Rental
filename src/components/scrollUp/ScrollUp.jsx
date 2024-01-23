import React from 'react';
import './scrollUp.scss';

import { FaChevronUp } from 'react-icons/fa';

const ScrollUp = () => {

  return (
    <a href="#top" className="scroll-up">
        <FaChevronUp />
    </a>
  )
}

export default ScrollUp