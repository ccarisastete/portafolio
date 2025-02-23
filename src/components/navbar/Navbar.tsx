import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/about'>About</Link>
      <Link to='/experiencie'>Experiencie</Link>
      <Link to='/education'>Education</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default Navbar;
