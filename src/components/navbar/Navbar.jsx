import "./navbar.css";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";


const Menu = () => (
  <>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About?</a></li>
            <li><a href="#cloud">Cloud</a></li>
            <li><a href="#case">Case Studies</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
  </>
)

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>

      <div className="navbar-links">
          <div className="logo"> 
            <img src={logo} alt="logo" />
          </div>

          <div className="links">
            <Menu />
          </div>
      </div>

      <div className="sign">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
      </div>

      <div className="menu">
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
      }
      {toggleMenu && (
          <div className="menu-toggle scale-up-center">
            <div className="menu-toggle-links">
              <Menu />
              <div className="menu-toggle-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
      )
      }
  </div>
  
  </div>
  )
}

export default Navbar
