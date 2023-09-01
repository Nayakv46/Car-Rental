import React from 'react'
import './reservationInput.css';

const ReservationInput = (props) => {
  return (
    <span>
        <label>{props.name} <b>*</b></label>
        <input type={props.type} placeholder={props.placeholder} ></input>
        <p>This field is required.</p>
    </span>
  )
}

export default ReservationInput