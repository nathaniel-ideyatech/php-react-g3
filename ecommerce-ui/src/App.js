import React from 'react';
import Main from './components/Main';

import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/navigation/Navigation';

export default function App() {

    return (
        <div>
            <div className="container">
                <Navigation/>
                <Main/>
            </div>
        </div>
    )
}