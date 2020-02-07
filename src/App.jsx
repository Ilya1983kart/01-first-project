import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import a from './components/Header.module.css'
import b from './components/Navbar.module.css'
import c from './components/Profile.module.css'

const App = () => {
    return (
        <div>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </div>
    )
};

export default App;
