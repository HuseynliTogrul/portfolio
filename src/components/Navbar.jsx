import React from 'react'
import Logo from "../images/logo.jpg"
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to="/">
                    <img src={Logo} alt="Logo image" />
                </Link>
            </div>
            <div className='nav'>
                <ul className='navList'>
                    <Link to="/" className='navListLi'>Home</Link>
                    <Link to="/About" className='navListLi'>About</Link>
                    <Link to="/Portfolio" className='navListLi'>Portfolio</Link>
                    <Link to="/Contact" className='navListLi'>Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar