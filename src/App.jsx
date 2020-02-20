import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Profile/Dialogs";
import News from "./components/Profile/News";
import Music from "./components/Profile/Music";
import Settings from "./components/Profile/Settings";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";


import a from './components/Header/Header.module.css'
import b from './components/Navbar/Navbar.module.css'


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='appWrapperContent'>
                        <Route path='/dialogs'
                               render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
