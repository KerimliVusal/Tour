import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import {NavLink} from 'react-router-dom'
function Header() {
   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header');
            const scrollTop = window.scrollY;
            scrollTop >= 40 ? header.classList.add('bg-white') : header.classList.remove('bg-white');
        };
  return (
    <div className="header">
      <div className='header-inner wrapper flex color-ink j-between'>
      <NavLink to='/'><img src={logo} alt="" /></NavLink>
      <ul className='flex'>
        <li className='mr-80'>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li className='mr-80'>
          <NavLink to='/service'>Service</NavLink>
        </li>
        <li className='mr-80'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/tours' className={'active'}>Tours</NavLink>
        </li>
      </ul>
      <div>
            <NavLink className={'active'} to='/login'>Log in</NavLink>
            <NavLink to='/signup' className='signUp-btn'>Sign up</NavLink>
      </div>
    </div>
    </div>
  )
}

export default Header