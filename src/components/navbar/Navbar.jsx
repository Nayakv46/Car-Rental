import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.scss';

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
    <nav className="navbar" id="top">
      <div className="navbar__logo">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="navbar__links">
          <Menu />
      </ul>

      <div className="navbar__sign">
        <Link to="/">Sign in</Link>
        <Link to='/' className="nav-button">Register</Link>
      </div>

      <div className="navbar__menu">
        {toggleMenu
        ? <RiCloseLine className='navbar__menu-svg' color="#010306" size={36} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line className='navbar__menu-svg' color="#010306" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="navbar__menu-container">
            <ul className="navbar__menu-links">
              <Menu />
            </ul>
            <div className="navbar__menu-sign">
              <Link to='/'>Sign in</Link>
              <Link to='/' className="nav-button">Register</Link>
            </div>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar