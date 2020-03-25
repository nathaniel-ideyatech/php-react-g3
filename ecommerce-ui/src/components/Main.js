import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import User from './users/User';
import Service  from './services/Service';
import ServiceDetails  from './services/service-detail/ServiceDetails';
import AddService from './services/add-service/AddService';
import AddUser from './users/add-user/AddUser';
import { AuthContext } from '../context/auth';
import PrivateRoute from './PrivateRoute'
import Navigation from '../components/navigation/Navigation';

import { ServiceDetail } from 'containers'

export default function Main(props) {
    const [authTokens, setAuthTokens] = useState(localStorage.getItem("tokens"));

    console.log(authTokens)

    const setTokens = (data) => {
        localStorage.setItem("tokens", data);
        setAuthTokens(data);
    }

    return (
        
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Navigation/>
            <BrowserRouter>
                <PrivateRoute exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/services/service/:id" component={ServiceDetail} />
                <PrivateRoute exact path="/users" component={User}/>
                    <PrivateRoute path="/users/add" component={AddUser} />
                    <PrivateRoute path="/users/edit/:id" component={AddUser} />
                <PrivateRoute exact path="/services" component={Service}/>
                    <PrivateRoute path="/services/add" component={AddService} />
                    <PrivateRoute path="/services/edit/:id" component={AddService} />
                    <PrivateRoute path="/services/view-details/:id" component={ServiceDetails} />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
