import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import User from './users/User';
import Service from './services/Service';
import AddService from './services/add-service/AddService';
import AddUser from './users/add-user/AddUser';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/users" component={User}/>
                <Route path="/users/add" component={AddUser} />
                <Route path="/users/edit/:id" component={AddUser} />
            <Route exact path="/services" component={Service}/>
                <Route path="/services/add" component={AddService} />
                <Route path="/services/edit/:id" component={AddService} />
        </Switch>
    )
}
