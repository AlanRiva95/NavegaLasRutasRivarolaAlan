import React from 'react'
import logo from '../img/logo2.jpg';
import "../index.css"

const Header = () => {
  return (
    <>
         <div className='banner'>
            <img className='banner-img' src={logo} alt="logo"  />
        </div>
        <h2 className='title'>Alianza Perfumes</h2>
    </>
  )
}

export default Header
