import React from 'react';

import './input.scss'

import {FaRegCalendarAlt} from 'react-icons/fa';

const Input = (props) => (
    <div className="input__container">
      <label className='input__label'>
        <FaRegCalendarAlt className='input__label-icon' input size={20} /> {props.label} <b className='input__label-required'>*</b>
      </label>
      <input className='input__valueHolder' name={props.name} type={props.type} required={true} onChange={props.changeHandler} ></input>
    </div>
  )

export default Input