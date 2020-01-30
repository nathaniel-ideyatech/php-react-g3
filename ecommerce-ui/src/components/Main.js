import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    )
}