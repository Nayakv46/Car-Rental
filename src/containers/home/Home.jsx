import { React, useState } from 'react'
import './home.css';

import home_bg from '../../assets/home_bg.png';
import home_car from '../../assets/home_car.png';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import { FaChevronRight } from 'react-icons/fa';

import ScrollUp from '../../components/scrollUp/ScrollUp';

const Home = () => {

  const [toggleAnchor, setToggleAnchor] = useState(false);

  window.onscroll = function (e) {
    if(window.scrollY > 1000){
      setToggleAnchor(true);
    } else {
      setToggleAnchor(false);
    }
  }
  
  return (
    <section className="rental__home" id="home">
      <img src={home_bg} alt="home-bg" />

      <div className="rental__home-content">

        <div className="rental__home-content_text">
          <h4>Plan your trip now</h4>
          <h1>Save <span>big</span> with our car rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>

          <div className="rental__home-content__text__buttons">
            <button type="button">
              Book Ride <BsFillCheckCircleFill />
            </button>
            <a href="#book">
              <button type="button">
                Learn More <FaChevronRight />
              </button>
            </a>
          </div>
          
        </div>

        <img src={home_car} alt="home-car" />
      </div>
      {toggleAnchor
      ? <ScrollUp />
      : null
      }
    </section>
  )
}

export default Home