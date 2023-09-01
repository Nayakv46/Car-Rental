import React from 'react';
import './scrollUp.css';

import { FaChevronUp } from 'react-icons/fa';

const ScrollUp = () => {

  return (
    <a href="#top" className="scroll-up">
        <FaChevronUp />
    </a>
  )
}

export default ScrollUp