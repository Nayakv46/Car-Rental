import React from 'react';

import './select.scss'

import { BiSolidCar } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

const Select = (props) => (
    <div className="select__container">
      <label className='select__label'>
        {props.label === "Car Type" ? <BiSolidCar className='select__label-icon' size={20} />
          : <FaLocationDot className='select__label-icon' size={20} />  
        }{props.label} <b className='select__label-required'>*</b>
      </label>
      <select name={props.name} required={true} onChange={props.changeHandler} className='select__input'>

        <option value="">Select Your {props.label}</option>
        {props.options.map((option, index) => (
          <option value={option} key={`${option}-${index}`}>{option}</option>
        ))}
        
      </select>
    </div>
  )
export default Select