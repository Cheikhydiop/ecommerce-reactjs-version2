import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Pied from './Pied';
import HomePage from './HomePage';
import Produits from './Produits';
import Headerse from './Headerse';
import Hero from './Hero';
import Payement from './Payement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

     <App/>
  
   </React.StrictMode> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
