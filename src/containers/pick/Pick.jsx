import { React, useState } from 'react';
import './pick.css';

import audia1 from "../../assets/audia1.jpg";
import benzglk from "../../assets/benzglk.jpg";
import bmw320 from "../../assets/bmw320.jpg";
import passatcc from "../../assets/passatcc.jpg";
import toyotacamry from "../../assets/toyotacamry.jpg";
import vwgolf from "../../assets/vwgolf.jpg";

import TablesRow from '../../components/tablesRow/TablesRow';

const carData = [
  {
    imgId: 1,
    Price: "$45",
    Model: "A1",
    Mark: "Audi",
    Year: "2012",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline"
  },
  {
    imgId: 2,
    Price: "$37",
    Model: "Golf 6",
    Mark: "Volkswagen",
    Year: "2008",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel"
  },
  {
    imgId: 3,
    Price: "$30",
    Model: "Camry",
    Mark: "Toyota",
    Year: "2006",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Hybrid"
  },
  {
    imgId: 4,
    Price: "$35",
    Model: "320",
    Mark: "BMW",
    Year: "2012",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel"
  },
  {
    imgId: 5,
    Price: "$50",
    Model: "Benz GLK",
    Mark: "Mercedes",
    Year: "2006",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel"
  },
  {
    imgId: 6,
    Price: "$25",
    Model: "Passat CC",
    Mark: "Volkswagen",
    Year: "2008",
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Automatic",
    Fuel: "Gasoline"
  }
]


const Pick = () => {

  const imageChange = (carId) => {
    switch(carId){
      case 1:
          return audia1;
      case 2:
          return vwgolf;
      case 3:
          return toyotacamry;
      case 4:
          return bmw320;
      case 5:
          return benzglk;
      case 6:
          return passatcc;
      default: 
          return null;
          
  }
  }
  
  const changePick = (data, id) => {
    
    document.querySelectorAll(".pick-button").forEach((element) => {
      element.classList.remove("picked");
    })
    
    document.querySelector(`#${id}`).classList.add("picked");

    setToggleCar({...toggleCar, 
      imgId: data.imgId,
      Price: data.Price, 
      Model: data.Model, 
      Mark: data.Mark, 
      Year: data.Year,
      Doors: data.Doors,
      AC: data.AC, 
      Transmission: data.Transmission,
      Fuel: data.Fuel 
    })
  }
 
  const [toggleCar, setToggleCar] = useState(
    {
      imgId: 1,
      Price: "$45",
      Model: "A1",
      Mark: "Audi",
      Year: "2012",
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Gasoline"
    }
  );



  return (
    <section className="rental__pick">
      <div className="rental__pick-header">
        <h2>Vehicle Models</h2>
        <h1>Our rental fleet</h1>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
      </div>
      <div className="rental__pick_car-content">
        <div className="rental__pick_car-content_pick">
          <button className="pick-button picked" id="btn1" onClick={(e) => changePick(carData[0], e.target.id)}>Audi A1 S-Line</button>
          <button className="pick-button" id="btn2"
            onClick={(e) => changePick(carData[1], e.target.id)}
          >VW Golf 6</button>
          <button className="pick-button" id="btn3"
            onClick={(e) => changePick(carData[2], e.target.id)}
          >Toyota Camry</button>
          <button className="pick-button" id="btn4"
            onClick={(e) => changePick(carData[3], e.target.id)}
          >BMW 320 ModernLine</button>
          <button className="pick-button" id="btn5"
            onClick={(e) => changePick(carData[4], e.target.id)}
          >Mercedes Benz GLK</button>
          <button className="pick-button" id="btn6"
            onClick={(e) => changePick(carData[5], e.target.id)}
          >VW Passat CC</button>
        </div>
        <div className="rental__pick_car-content_car">
          <div className="rental__pick_car-content_car-picked">
            <img src={imageChange(toggleCar.imgId)} alt="picked-car" />
          </div>
          <div className="rental__pick_car-content_car-description">

            <div className="rental__pick_car-content_car-description_price">
              <span>{toggleCar.Price} </span><p>/ rent per day</p>

            </div>
            <div className="rental__pick_car-content_car-description_table">
              <TablesRow name="Model" value={toggleCar.Model}/>
              <TablesRow name="Mark" value={toggleCar.Mark} />
              <TablesRow name="Year" value={toggleCar.Year} />
              <TablesRow name="Doors" value={toggleCar.Doors} />
              <TablesRow name="AC" value={toggleCar.AC} />
              <TablesRow name="Transmission" value={toggleCar.Transmission} />
              <TablesRow name="Fuel" value={toggleCar.Fuel} />
            </div>
            <a className="cta-button" href="#book">Reserve Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pick