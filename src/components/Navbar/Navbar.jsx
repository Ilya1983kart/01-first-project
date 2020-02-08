import React from 'react';
import b from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={b.nav}>
            <div className={b.item}>
            <div><a className={`${b.item} ${b.active}`} href="#">Profile</a></div>
            <div><a href="#">Message</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Musik</a></div>
            <div><a href="#">Settings</a></div>
            </div>
        </nav>
    )
}
export default Navbar;