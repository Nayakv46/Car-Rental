import React from 'react';
import './modelBox.scss';

import audi_model from '../../assets/audia1.jpg';
import golf_model from '../../assets/vwgolf.jpg';
import toyota_model from '../../assets/toyotacamry.jpg';
import bmw_model from '../../assets/bmw320.jpg';
import benz_model from '../../assets/benzglk.jpg';
import passat_model from '../../assets/passatcc.jpg';

import { PiGasCanFill, PiStarFill } from 'react-icons/pi';

import { GiGearStickPattern, GiCarDoor } from 'react-icons/gi';

import { IoLogoModelS } from 'react-icons/io';

const ModelBox = (props) => {

    const imgHandler = (id) => {
        switch(id){
            case 1:
                return audi_model;
            case 2:
                return golf_model;
            case 3:
                return toyota_model;
            case 4:
                return bmw_model;
            case 5:
                return benz_model;
            case 6:
                return passat_model;
            default:
                return null;
        }
    }

  return (
    <div className="modelBox">
        <div className="modelBox__image">
            <img src={imgHandler(props.img)} alt="vehicle_model" />
        </div>
        <div className="modelBox__content">
            <div className="modelBox__content-description">
                <div className="modelBox__content-description_name">
                    <h2>{props.mark}</h2>
                    <p>
                        <PiStarFill size={18} color="#ffc933" />
                        <PiStarFill size={18} color="#ffc933" />
                        <PiStarFill size={18} color="#ffc933" />
                        <PiStarFill size={18} color="#ffc933" />
                        <PiStarFill size={18} color="#ffc933" />
                    </p>
                </div>

                <div className='modelBox__content-description_price'>
                    <h2>{props.price}</h2>
                    <p>per day</p>
                </div>
            </div>

            <div className="modelBox__content-details">
                <div className="modelBox__content-details_model">
                    <span><IoLogoModelS size={24} color="#010103" /> {props.model}</span>
                </div>

                <div className="modelBox__content-details_doors">
                    <span>{props.doors} <GiCarDoor size={24} color="#010103" /></span>
                </div>

                <div className="modelBox__content-details_transmission">
                    <span><GiGearStickPattern size={24} color="#010103" /> {props.transmission}</span>
                </div>

                <div className="modelBox__content-details_fuel">
                    <span>{props.fuel} <PiGasCanFill size={24} color="#010103" /></span>
                </div>
            </div>
            <hr />
            <div className="modelBox__content-button">
                <button type="button">Book Ride</button>
            </div>
        </div>
    </div>
  )
}

export default ModelBox