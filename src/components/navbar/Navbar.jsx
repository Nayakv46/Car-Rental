import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import logo from '../../assets/logo.png';


const Menu = () => (
  <>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/models">Vehicle Models</Link></p>
    <p><Link to="/testimonials">Testimonials</Link></p>
    <p><Link to="/team">Our Team</Link></p>
    <p><Link to="/contact">Contact</Link></p>
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

      <div className="rental__navbar-links">
          <Menu />
      </div>

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
            <div className="rental__navbar-menu-container-links">
              <Menu />
            </div>
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