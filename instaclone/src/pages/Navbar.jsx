import React from 'react';
import '../assets/styles/navbar.css';

const navbar = () => {
  return (
    <div className='navContainer'>
      <nav>
      <a href='index.html' className='navLogo' >Instagram</a>
      </nav>

      <div className='otherContainer'>
        <div className='searchBar'>
            <i className='uil uil-search' ></i>
            <input type='text' placeholder='     Search'/>
        </div>

        <ul className='navList' >

                <li className='navItem' >
                    <a href="#home" className='navLink activeLink' >
                        <i className='uil uil-estate navIcon' ></i>
                    </a>
                </li>

                <li className='navItem' >
                    <a href="#message" className='navLink' >
                        <i className='uil uil-facebook-messenger-alt navIcon' ></i>
                    </a>
                </li>

                <li className='navItem' >
                    <a href="#post" className='navLink' >
                        <i className='uil uil-plus-square navIcon' ></i>
                    </a>
                </li>

                <li className='navItem' >
                    <a href="#nearby" className='navLink' >
                        <i className='uil uil-compass navIcon' ></i>
                    </a>
                </li>

                <li className='navItem' >
                    <a href="#likes" className='navLink' >
                        <i className='uil uil-heart navIcon' ></i>
                    </a>
                </li>

                <li className='navItem' >
                    <a href="#profile" className='navLink' >
                        <i className='uil uil-user-circle navIcon' ></i>
                    </a>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default navbar;
