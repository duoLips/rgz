import React from "react";
import {useState} from "react";
const Header = () => {
    const [isShown, setIsShown] = useState(false);

    return(
        <header>
            <div className={`header--content`}>
                <nav className={`navbar`}>
                    <ul className='navbar--list'>
                        <li className='navbar--item'><a href="#home">Головна</a></li>
                        <li className='navbar--item'><a href="#home">Про валізу</a></li>
                        <li className='navbar--item'><a href="#home">Склад</a></li>
                        <li className='navbar--item'><a href="#home">Типи валіз</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header