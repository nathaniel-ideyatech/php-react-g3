import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';
// import { Provider } from 'react-redux';

import { MainScreen } from './containers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const middlewares = [
    thunk
]

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));


// Set routing
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainScreen />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
