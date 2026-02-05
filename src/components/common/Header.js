import { useState } from 'react';
import { LOGO } from '../../utils/Constants';
import { NavLink } from 'react-router';

const Header = () => {
  const [btn, setBtn] = useState('Login');

  return (
    <nav className="header-class">
      <img
        src={LOGO}
        alt="Restaurant Logo"
        style={{ height: '80px', margin: '10px' }}
      />

      <ul className="nav-header">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink
            onClick={() =>
              setBtn(btn === 'Login' ? 'Logout' : 'Login')
            }
          >
            {btn}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
