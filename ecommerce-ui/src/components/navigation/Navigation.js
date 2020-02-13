import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import Logout from '../logout/Logout'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                </Nav>
                <Logout/>
            </Navbar>
        </div>
    )
}