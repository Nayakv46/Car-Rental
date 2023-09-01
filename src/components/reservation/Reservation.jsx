import { React } from 'react'
import './reservation.css';

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
    <span>
        {props.time === "time"
            ? <FaLocationDot size={20} color="#777" /> 
            : <FaRegCalendarAlt size={20} color="#777" />
        }
        <div>
            <h6>{props.name}</h6>
            <p>
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
            className="rental__booking-reservation_overlay active" 
            onClick={() => {
                document.querySelector("body").style.overflow = "auto";
                // document.querySelector(".rental__booking-reservation-container").classList.remove("active");
                // document.querySelector(".rental__booking-reservation_overlay").classList.remove("active");
                props.toggleSearch(false)
                }
            } 
        >
        </div>

        <div className="rental__booking-reservation-container active">

            <div className="rental__booking-reservation-container_banner">
                <span>COMPLETE RESERVATION</span>
                <IoIosClose 
                    size={40} 
                    onClick={() => {
                        document.querySelector("body").style.overflow = "auto";
                        props.toggleSearch(false)
                    }} 
                />
            </div>

            <div className="rental__booking-reservation-container_info">
                <h2><FaInfoCircle /> Upon completing this reservation enquiry, you will receive:</h2>
                <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>

            <div className="rental__booking-reservation-container_description">

                <div className="rental__booking-reservation-container_description-locationdate">
                    <h2>Location & Date</h2>
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
                    <h5><span>Car -</span> {props.carType}</h5>
                    <img src={carImage(props.carType)} alt="chosen_car" />
                </div>
            </div>
            <hr />
            <div className="rental__booking-reservation-container_personal-info">
                <h4>PERSONAL INFORMATION</h4>
                <form className="personal-info_form">
                    
                    <div className="personal-info__group1">
                        <ReservationInput name="First Name" type="text" placeholder="Enter your first name" />
                        <ReservationInput name="Last Name" type="text" placeholder="Enter your last name" />
                        <ReservationInput name="Phone Number" type="tel" placeholder="Enter your phone number" />
                        <ReservationInput name="Age" type="number" placeholder="18" />
                    </div>
                    
                    <div className="personal-info__group2">
                        <ReservationInput name="Email" type="email" placeholder="Enter your email address" />
                        <ReservationInput name="Address" type="text" placeholder="Enter your street address" />
                    </div>
                    
                    <div className="personal-info__group3">
                        <ReservationInput name="City" type="text" placeholder="Enter your city" />
                        <ReservationInput name="Zip Code" type="text" placeholder="Enter your zip code" />
                    </div>

                    <span>
                        <input type="checkbox" />
                        <p>Please send me latest news and updates</p>
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