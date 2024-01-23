import React from 'react'
import './reservationInput.scss';

const ReservationInput = (props) => {
  return (
    <span className='reservationInput'>
        <label className='reservationInput__label'>
        {props.name}
        <b className='reservationInput__label-required'>*</b>
        </label>
        <input className='reservationInput__input' type={props.type} placeholder={props.placeholder} ></input>
        <p className='reservationInput__text'>This field is required.</p>
    </span>
  )
}

export default ReservationInput