import { React, useState } from 'react'
import './home.scss';

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
    <section className="home" id="home">
      <img src={home_bg} alt="home-bg" className='home__background' />

      <div className="home__content">

        <div className="home__content-text">
          <h4 className='home__content-title'>Plan your trip now</h4>
          <h1 className='home__content-header'>Save <span className='home__content-header-emphasis'>big</span> with our car rental</h1>
          <p className='home__content-paragraph'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>

          <div className="home__content-buttons">
            <button type="button" className='home__button home__button--book'>
              Book Ride <BsFillCheckCircleFill />
            </button>
            <a href="#book">
              <button type="button" className='home__button home__button--learn'>
                Learn More <FaChevronRight />
              </button>
            </a>
          </div>
          
        </div>

        <img src={home_car} className='home__content-image' alt="home-car" />
      </div>
      {toggleAnchor
      ? <ScrollUp />
      : null
      }
    </section>
  )
}

export default Home