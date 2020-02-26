import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';
// import { Provider } from 'react-redux';

import { HomeScreen } from './containers'


// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.querySelector('#root')
// )

// Set routing
ReactDOM.render(
    <BrowserRouter>
        <HomeScreen />
    </BrowserRouter>, document.getElementById('root')
);
