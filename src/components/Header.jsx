import React from "react";
import {useState} from "react";
import '../styles/header.scss'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="burger" onClick={toggleNavbar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="wrapper">

                <ul className="nav-items">
                    <li><a onClick={toggleNavbar} href="#">Головна</a></li>
                    <li><a onClick={toggleNavbar} href="#">Про валізу</a></li>
                    <li><a onClick={toggleNavbar} href="#">Склад</a></li>
                    <li><a onClick={toggleNavbar} href="#">Типи валіз</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header