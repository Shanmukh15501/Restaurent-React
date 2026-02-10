import { useState } from 'react';
import { LOGO } from '../../utils/Constants';
import { NavLink } from 'react-router';
import { useInternet } from '../../hooks/useInternet';
const Header = () => {
  const [btn, setBtn] = useState('Login');
  const onlineStatus =  useInternet()

  return (
    <nav className="flex justify-between bg-pink-100 shadow-lg m-2 p-5">
      <img className='w-20'
        src={LOGO}
        alt="Restaurant Logo"
      />

      <ul className="flex p-4 m-4">
        <li className='px-4'>
            <NavLink>Online Status{onlineStatus? "✅":"❌"}</NavLink>
        </li>
        <li className='px-4'>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className='px-4'>
          <NavLink to="/grocery">Grocery</NavLink>
        </li>
        <li className='px-4'>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className='px-4'>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className='px-4'>
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
