import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
let posts = [
    {id: 1, message: 'Hi', likescount: 5},
    {id: 1, message: 'How are You', likescount: 10},
    {id: 1, message: 'What is your name', likescount: 15}
];
let dialogs = [
    {id: 1, name: 'Kolyan'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Timur'}

];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your bussines?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},

];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
