import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineHome } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorChange] = useState(false);
  const history = useHistory();
  const changeBgNavbar = () => {
    if (window.scrollY >= 65) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener('scroll', changeBgNavbar);

  return (
    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <div className="navbar-container">
        <h2 className="navbar-title" onClick={() => history.push('/')}>
          EDUCODE
        </h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size="30" /> : <GoThreeBars size="30" />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link className={colorChange ? 'nav-links hover-underline-animation change-color' : 'nav-links hover-underline-animation'} to="/">
            <li onClick={closeMobileMenu}>
              <span>
                <AiOutlineHome />
              </span>
              Home
            </li>
          </Link>
          <Link className={colorChange ? 'nav-links hover-underline-animation change-color' : 'nav-links hover-underline-animation'} to="/course">
            <li onClick={closeMobileMenu}>
              <span>
                <SiGoogleclassroom />
              </span>
              Courses
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
