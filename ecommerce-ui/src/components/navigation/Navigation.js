import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import axios from 'axios';
import { useAuth } from '../../context/auth';

export default function Navigation(props) {
    const { setAuthTokens } = useAuth();

    function logout() {
        const headers =  {
            "Authorization" : `Bearer ${localStorage.getItem("tokens")}`}

        axios.get('http://localhost:8000/api/logout', {headers: headers})
            .then(result => {
                if(result) {
                    setAuthTokens('');
                }
            });
    }

    if (localStorage.getItem("tokens")) {
        return (

            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" onClick={logout}>Logout</Button>
                </Navbar>
            </div>
        )
    } else {
        return (<div></div>)
    }
}