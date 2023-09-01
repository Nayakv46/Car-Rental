import React from 'react';

import { BiSolidCar } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

const Select = (props) => (
    <div className="book-form_input">
      <label>
        {props.label === "Car Type" ? <BiSolidCar size={20} />
          : <FaLocationDot size={20} />  
        }{props.label} <b>*</b>
      </label>
      <select name={props.name} required={true} onChange={props.changeHandler}>

        <option value="">Select Your {props.label}</option>
        {props.options.map((option, index) => (
          <option value={option} key={`${option}-${index}`}>{option}</option>
        ))}
        
      </select>
    </div>
  )
export default Select