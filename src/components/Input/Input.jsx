import React from 'react';

import {FaRegCalendarAlt} from 'react-icons/fa';

const Input = (props) => (
    <div className="book-form_input">
      <label>
        <FaRegCalendarAlt size={20} /> {props.label} <b>*</b>
      </label>
      <input name={props.name} type={props.type} required={true} onChange={props.changeHandler} ></input>
    </div>
  )

export default Input