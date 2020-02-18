import React from 'react';
import b from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={b.nav}>
            <div className={b.item}>
            <div><NavLink to="/profile" activeClassName={b.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={b.active} >Message</NavLink></div>
            <div><NavLink to="/news" activeClassName={b.active} >News</NavLink></div>
            <div><NavLink to="/music"  activeClassName={b.active}>Musik</NavLink></div>
            <div><NavLink to="/Settings" activeClassName={b.active} >Settings</NavLink></div>
            </div>
        </nav>
    )
}
export default Navbar;
