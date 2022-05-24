import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { VscTools } from 'react-icons/vsc';
import { MdCallMade } from 'react-icons/md';
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [colorChange, setColorChange] = useState(false);
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
        <h2 className="navbar-title">EDUCODE</h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size="30" /> : <GoThreeBars size="30" />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link className="nav-links hover-underline-animation" to="/">
            <li onClick={closeMobileMenu}>
              <AiOutlineHome />
              Home
            </li>
          </Link>
          <Link className="nav-links hover-underline-animation" to="/dummy">
            <li onClick={closeMobileMenu}>
              <SiGoogleclassroom />
              About
            </li>
          </Link>
          <Link className="nav-links hover-underline-animation" to="/examStart">
            <li onClick={closeMobileMenu}>
              <VscTools />
              Tools & Skills
            </li>
          </Link>
          <Link className="nav-links hover-underline-animation" to="/summary">
            <li onClick={closeMobileMenu}>
              <AiOutlineFundProjectionScreen />
              Project
            </li>
          </Link>
          <Link className="nav-links hover-underline-animation" to="/contact">
            <li onClick={closeMobileMenu}>
              Contact Me <MdCallMade />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
