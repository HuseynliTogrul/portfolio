import React, { useEffect } from 'react'
import Logo from "../images/logo.jpg"
import "../css/Navbar.css"
import { Link } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {

    useEffect(() => {
        const menubar = document.querySelector(".menubar");
        const navList = document.querySelector(".navList");
        const closeMenu = document.querySelector(".closeMenu");
        const navListLi = document.querySelectorAll(".navListLi");

        const openMenu = () => {
            navList.style.display = "flex";
            closeMenu.style.display = "block";
            menubar.style.display = "none";
            navList.classList.add("closeMenuChange");
        };

        const closeMenuAction = () => {
            navList.style.display = "none";
            menubar.style.display = "block";
            closeMenu.style.display = "none";
            navList.classList.remove("closeMenuChange");
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                navList.style.display = "flex";
                menubar.style.display = "none";
                closeMenu.style.display = "none";
                navList.classList.remove("closeMenuChange");
            } else {
                navList.style.display = "none";
                menubar.style.display = "block";
            }
        };

        menubar.addEventListener("click", openMenu);
        closeMenu.addEventListener("click", closeMenuAction);
        window.addEventListener("resize", handleResize);

        // navListLi.forEach(e => {
        //     e.addEventListener("click", closeMenuAction);
        // });

        navListLi.forEach(e => {
            e.addEventListener("click", () => {
                if (window.innerWidth <= 1024) {
                    navList.style.display = "none"
                    closeMenu.style.display = "none"
                    menubar.style.display = "block"
                } else {
                    navList.style.display = "flex"
                    closeMenu.style.display = "none"
                    menubar.style.display = "none"
                }
            })
        });

        handleResize();

        return () => {
            menubar.removeEventListener("click", openMenu);
            closeMenu.removeEventListener("click", closeMenuAction);
            window.removeEventListener("resize", handleResize);
            navListLi.forEach(e => {
                e.removeEventListener("click", closeMenuAction);
            });
        };
    }, []);

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
                <IoMenuSharp className='menubar' />
                <AiOutlineClose className='closeMenu' />
            </div>
            {/* <IoMenuSharp className='menubar' />
            <AiOutlineClose className='closeMenu' /> */}
        </div>
    )
}

export default Navbar