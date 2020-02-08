import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import a from './components/Header/Header.module.css'
import b from './components/Navbar/Navbar.module.css'
import c from './components/Profile/Profile.module.css'

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
