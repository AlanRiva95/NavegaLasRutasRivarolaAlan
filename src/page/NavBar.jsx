import React from 'react'
import { NavLink } from 'react-router-dom';
export const NavBar = () => {

    return (
        <>
            <div className='barra'>
                <NavLink to="/Galeria" className={({ isActive }) => (isActive ? 'active' : '')}>Galeria</NavLink>              
                <NavLink to="/Masculinos" className={({ isActive }) => (isActive ? 'active' : '')}>Masculinos</NavLink>
                <NavLink to="/Femeninos" className={({ isActive }) => (isActive ? 'active' : '')}>Femeninos</NavLink>
                <NavLink to="/Nuevos" className={({ isActive }) => (isActive ? 'active' : '')}>Nuevos ingresos</NavLink>
            </div >
        </>

    )
}
export default NavBar
