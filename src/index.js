import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from "firebase/app";

initializeApp({apiKey: "AIzaSyDRP8hm30_FCGCcEAlqUqnJny09nKrdzFU",
authDomain: "ecommerce-e887e.firebaseapp.com",
projectId: "ecommerce-e887e",
storageBucket: "ecommerce-e887e.appspot.com",
messagingSenderId: "284180274009",
appId: "1:284180274009:web:09413f939f40cea03f8a48"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

