import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      <button
        className='hamburger'
        onClick={toggleMenu}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink
          to='/about'
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to='/experiencie'
          onClick={() => setIsOpen(false)}
        >
          Experiencie
        </NavLink>
        <NavLink
          to='/education'
          onClick={() => setIsOpen(false)}
        >
          Education
        </NavLink>
        <NavLink
          to='/skills'
          onClick={() => setIsOpen(false)}
        >
          Skills
        </NavLink>
        <NavLink
          to='/contact'
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
