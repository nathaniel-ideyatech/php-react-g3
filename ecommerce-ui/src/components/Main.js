import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import User from './users/User';
import Service from './services/Service';
import CreateService from './services/create-service/CreateService';
import EditService from './services/edit-service/EditService';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/users" component={User}/>
            <Route exact path="/services" component={Service}/>
                <Route path="/services/add" component={CreateService} />
                <Route path="/services/edit/:id" component={EditService} />
        </Switch>
    )
}
