import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import logo from '../../assets/logo.png';


const Menu = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/models">Vehicle Models</Link></li>
    <li><Link to="/testimonials">Testimonials</Link></li>
    <li><Link to="/team">Our Team</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="rental__navbar" id="top">
      <div className="rental__navbar-logo">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="rental__navbar-links">
          <Menu />
      </ul>

      <div className="rental__navbar-sign">
        <p><Link to="/">Sign in</Link></p>
        <Link to='/' className="nav-button">Register</Link>
      </div>

      <div className="rental__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#010306" size={36} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#010306" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="rental__navbar-menu_container scale-up-center">
            <ul className="rental__navbar-menu-container-links">
              <Menu />
            </ul>
            <div className="rental__navbar-menu_container-links-sign">
              <Link to='/'><p>Sign in</p></Link>
              <Link to='/' className="nav-button">Register</Link>
            </div>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar