import { React } from 'react'
import './reservation.scss';

import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import { IoIosClose } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';

import audia1 from "../../assets/audia1.jpg";
import benzglk from "../../assets/benzglk.jpg";
import bmw320 from "../../assets/bmw320.jpg";
import passatcc from "../../assets/passatcc.jpg";
import toyotacamry from "../../assets/toyotacamry.jpg";
import vwgolf from "../../assets/vwgolf.jpg";

import ReservationInput from '../reservationInput/ReservationInput';

const LocationDate = (props) => (
    <span className='reservation__description-details'>
        {props.time === "time"
            ? <FaLocationDot size={20} color="#777" /> 
            : <FaRegCalendarAlt size={20} color="#777" />
        }
        <div>
            <h6 className='reservation__description-details-title'>{props.name}</h6>
            <p className='reservation__description-details-value'>
                {props.value}
                {props.time === "time"
                    ? <> / <input type="time"></input></>
                    : null
                }
                
            </p>
        </div>
    </span>
);

const carImage = (carName) => {
    switch(carName){

        case "Audi A1 S-Line":
            return audia1;
        case "VW Golf 6":
            return vwgolf;
        case "Toyota Camry":
            return toyotacamry;
        case "BMW 320 ModernLine":
            return bmw320;
        case "Mercedes-Benz GLK":
            return benzglk;
        case "VW Passat CC":
            return passatcc;
        default: 
            return null;
            
    }
}

const Reservation = (props) => {
  

  return (
    <>
        <div 
            className="reservation__overlay active" 
            onClick={() => {
                document.querySelector("body").style.overflow = "auto";
                // document.querySelector(".reservation__container").classList.remove("active");
                // document.querySelector(".reservation__overlay").classList.remove("active");
                props.toggleSearch(false)
                }
            } 
        >
        </div>

        <div className="reservation__container active">

            <div className="reservation__banner">
                <span>COMPLETE RESERVATION</span>
                <IoIosClose 
                    className='reservation__banner-icon'
                    size={40} 
                    onClick={() => {
                        document.querySelector("body").style.overflow = "auto";
                        props.toggleSearch(false)
                    }} 
                />
            </div>

            <div className="reservation__info">
                <h2 className='reservation__info-header'><FaInfoCircle className='reservation__info-header-icon' /> Upon completing this reservation enquiry, you will receive:</h2>
                <p className='reservation__info-text'>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>

            <div className="reservation__description">

                <div className="reservation__description-locationdate">
                    <h2 className='reservation__description-title'>Location & Date</h2>
                    <div className="description-pickup-time">
                        <LocationDate 
                            value={props.pickUpDate}  name="Pick-up Date & Time" time="time" 
                        />
                    </div>

                    <div className="description-dropoff-time">
                        <LocationDate 
                            value={props.dropOffDate} name="Drop-off Date & Time" time="time" 
                        />
                    </div>
                    
                    <div className="description-pickup-location">
                        <LocationDate 
                            value={props.pickUpLocation} name="Pick-up Location" 
                        />
                    </div>
                    
                    <div className="description-dropoff-location">
                        <LocationDate 
                            value={props.dropOffLocation} name="Drop-off Location" 
                        />
                    </div>
                </div>

                <div className="description-car">
                    <h5 className='description-car__name'><span className='description-car__name-prefix'>Car -</span> {props.carType}</h5>
                    <img src={carImage(props.carType)} alt="chosen_car" className='description-car__image'/>
                </div>
            </div>
            <hr />
            <div className="reservation__container-personalInfo">
                <h4 className='reservation__container-personalInfo-header'>PERSONAL INFORMATION</h4>
                <form className="personal-info_form">
                    
                    <div className="personalInfo__group1">
                        <ReservationInput name="First Name" type="text" placeholder="Enter your first name" />
                        <ReservationInput name="Last Name" type="text" placeholder="Enter your last name" />
                        <ReservationInput name="Phone Number" type="tel" placeholder="Enter your phone number" />
                        <ReservationInput name="Age" type="number" placeholder="18" />
                    </div>
                    
                    <div className="personalInfo__group2">
                        <ReservationInput name="Email" type="email" placeholder="Enter your email address" />
                        <ReservationInput name="Address" type="text" placeholder="Enter your street address" />
                    </div>
                    
                    <div className="personalInfo__group3">
                        <ReservationInput name="City" type="text" placeholder="Enter your city" />
                        <ReservationInput name="Zip Code" type="text" placeholder="Enter your zip code" />
                    </div>

                    <span className='personalInfo__form-consent'>
                        <input type="checkbox" />
                        <p className='personalInfo__form-text'>Please send me latest news and updates</p>
                    </span>
                </form>


            </div>
                <div className="reserve-button">
                    <button type="button" onClick={() => {
                        props.toggleSearch(false);
                        props.toggleConfirm(true);
                        // add a toggle to show confirmation 
                        document.querySelector("body").style.overflow = "auto";
                    }}>Reserve Now</button>
                </div>
        </div>
    </>

  )
}

export default Reservation