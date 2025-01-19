import React from 'react'
import logo from '../img/logo2.jpg';
import "../index.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div>
        <Link to="/Home" className='banner'>
          <img className='banner-img' src={logo} alt="logo" />
        </Link>
      </div>
      <h2 className='title'>Alianza Perfumes</h2>
    </>
  );
}

export default Header
