import { React, useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import logo from '../../assets/logo.png';

//BEM -> Block Element Modifier


const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="/about">About</a></p>
    <p><a href="/models">Vehicle Models</a></p>
    <p><a href="/testimonials">Testimonials</a></p>
    <p><a href="/team">Our Team</a></p>
    <p><a href="/contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="rental__navbar" id="top">
      <div className="rental__navbar-links_logo">
        <a href='/'>
        <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="rental__navbar-links">
          <Menu />
      </div>

      <div className="rental__navbar-sign">
        <p><a href="/">Sign in</a></p>
        <a href='/' className="nav-button">Register</a>
      </div>

      <div className="rental__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#010306" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#010306" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="rental__navbar-menu_container scale-up-center">
            <div className="rental__navbar-menu-container-links">
              <Menu />
            </div>
            <div className="rental__navbar-menu_container-links-sign">
              <a href='/'><p>Sign in</p></a>
              <a href='/' className="nav-button">Register</a>
            </div>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar