import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logomandrea.png'
import Compra from '../../img/mla.png'

import './Navbar.css';



export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logo" src={Logo} width="100%" height="100%"  alt="" />
            </div>
            <div>
                <img id="compra" src={Compra} width="340px" height="39px"  alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li >
                        <NavLink exact to="/" >Home</NavLink>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

