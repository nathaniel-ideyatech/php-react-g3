import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';

export default function Logout() {

    function logout() {
        axios.get('http://localhost:8000/api/logout')
            .then(result => {
                console.log(result);
            });
    }

    return (
        <div>
            <Button variant="outline-info" onClick={logout}>Logout</Button>
        </div>
    )
}