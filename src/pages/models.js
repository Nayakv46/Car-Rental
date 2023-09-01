import React from 'react';
import './models.css';

import { Footer, Navbar, PageNamer, ContactBanner, ModelBox } from '../components';

const modelData = [
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

const Models = () => {
  return (
    <>
        <Navbar />
        <PageNamer pageName="Vehicle Models" />
        <section className="rental__models">
          <div className="rental__models-content">
            {modelData.map((model, index) => (
              <ModelBox key={model.Model + index} model={model.Model} price={model.Price} mark={model.Mark} doors={model.Doors} transmission={model.Transmission} fuel={model.Fuel} img={model.imgId} />
            ))}
            
          </div>
        </section>
        <ContactBanner />
        <Footer />
    </>
  )
}

export default Models