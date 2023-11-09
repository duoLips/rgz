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
                    <li><a onClick={toggleNavbar} href="#main">Головна</a></li>
                    <li><a onClick={toggleNavbar} href="#about">Про валізу</a></li>
                    <li><a onClick={toggleNavbar} href="#cards">Склад</a></li>
                    <li><a onClick={toggleNavbar} href="#types">Типи валіз</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header