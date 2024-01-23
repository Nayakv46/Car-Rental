import { React, useState} from 'react'
import './booking.scss';

import { GrFormClose } from 'react-icons/gr';

import Select from '../../components/Select/Select.jsx';
import Input from '../../components/Input/Input.jsx';

import Reservation from '../../components/reservation/Reservation';

const Cars = [
  "Audi A1 S-Line",
  "VW Golf 6",
  "Toyota Camry",
  "BMW 320 ModernLine",
  "Mercedes-Benz GLK",
  "VW Passat CC"
]

const Locations = [
  "London",
  "Brighton",
  "Winchester",
  "Canterbury",
  "Oxford"
]

const Booking = () => {

  const [toggleError, setToggleError] = useState(false);
  const [toggleValidate, setToggleValidate] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const [toggleConfirm, setToggleConfirm] = useState(false);

  const [allValues, setAllValues] = useState({
    carType: '',
    pickUpLocation: '',
    dropOffLocation: '',
    pickUpDate: '',
    dropOffDate: ''
  })

  const changeHandler = (e) => {
    //console.log(e);
    //console.log("...allValues", ...allValues);
    console.log("[e.target.name]", [e.target.name]);
    console.log("e.target.value", e.target.value);
    setAllValues({...allValues, [e.target.name]: e.target.value});
    console.log(allValues);
    console.log(Object.values(allValues))
  }

  const validationHandler = () => {
    
    for(let i = 0; i < Object.values(allValues).length - 1; i++){

      if(Object.values(allValues)[i] === ""){
        setToggleError(true);
        setToggleValidate(false);
        break;
      } else {
        setToggleError(false);
        setToggleValidate(true);
        document.querySelector("body").style.overflow = "hidden";
      }

    }
    
  }

  return (
    <section id="book" className='booking'>
      <div className="booking__container">
        
          <h2>Book a car</h2>
          { toggleConfirm
            ? <p className="confirm-message">Check your email to confirm an order. <GrFormClose size={32} onClick={() => setToggleConfirm(false)} /></p>
            : null
          }
          { toggleError 
            ? <p className="error-message">All fields required! <GrFormClose size={32}  onClick={() => setToggleError(false)} /></p>
            : null
          }
          <form className="bookForm">
            <Select
              label="Car Type"
              options={Cars}
              name="carType"
              changeHandler={changeHandler}
            />
            <Select
              label="Pick-up Location"
              options={Locations}
              name="pickUpLocation"
              changeHandler={changeHandler}
            />
            <Select
              label="Drop-off Location"
              options={Locations}
              name="dropOffLocation"
              changeHandler={changeHandler}
            />
            <Input
              label="Pick-up Date"
              type="date"
              name="pickUpDate"
              changeHandler={changeHandler}
            />
            <Input
              label="Drop-off Date"
              type="date"
              name="dropOffDate"
              changeHandler={changeHandler}
            />
            <button
              className='bookForm__button'
              type="button"
              onClick={() => {

                validationHandler();
                setToggleSearch(true);
              }}
            >Search</button>
          </form>

        {toggleError === false && toggleSearch === true && toggleValidate === true
          ?  <Reservation
                carType={allValues.carType}
                pickUpLocation={allValues.pickUpLocation} dropOffLocation={allValues.dropOffLocation} pickUpDate={allValues.pickUpDate}
                dropOffDate={allValues.dropOffDate}
                toggleSearch={setToggleSearch}
                toggleConfirm={setToggleConfirm}
              />
          : <></>
        }
      </div>
    </section>
  )
}

export default Booking