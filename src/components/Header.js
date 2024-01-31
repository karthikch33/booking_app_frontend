import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const [activeLink,setActiveLink] = useState('Home')

  const handleLogOut = ()=>{
    handleClick()
    localStorage.removeItem('adminData')
    localStorage.removeItem('server')
    localStorage.removeItem('email')
  }

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Booking.Com</span>
            <span className="icon">
              {/* <CodeIcon /> */}
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/hotels"
                className={activeLink === 'Home' ? 'activeLink nav-links' : 'nav-links'}
                onMouseEnter={() => handleMouseEnter('Home')}
                onClick={handleClick}
              >
              Hotels
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/carrentals"
                className={activeLink === 'Car Rentals' ? 'activeLink nav-links' : 'nav-links'}
                onMouseEnter={() => handleMouseEnter('Car Rentals')}
                onClick={handleClick}
              >
                Car Rentals
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/resorts"
                className={activeLink === 'Resorts' ? 'activeLink nav-links' : 'nav-links'}
                onMouseEnter={() => handleMouseEnter('Resorts')}
                onClick={handleClick}
              >
                Resorts
              </NavLink>
            </li>
           {localStorage.getItem('adminData') ? <li className="nav-item">
              <NavLink
                exact
                to="/logout"
                className={activeLink === 'LogOut' ? 'activeLink nav-links' : 'nav-links'} 
                onMouseEnter={() => handleMouseEnter('LogOut')}
                onClick={handleLogOut}
              >
               LogOut
              </NavLink>
            </li>:
            <li className="nav-item">
            <NavLink
                exact
                to="/"
                className={activeLink === 'Login' ? 'activeLink nav-links' : 'nav-links'} 
                onMouseEnter={() => handleMouseEnter('Login')}
                onClick={handleClick}
              >
               Login
              </NavLink></li>}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
                <span className="icon">
                  <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;