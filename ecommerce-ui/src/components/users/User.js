import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Form, Table } from "react-bootstrap";
import "./User.css";

export default function User(props) {

    const [users, setUsers] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState([false]);

    useEffect(() => {
        const data = localStorage.getItem("tokens");
        
        const header = {
            "Authorization" : `Bearer ${data}`}

        axios.get('http://localhost:8000/api/users', {headers: header})
            .then(res => {
                if(res.data.error) {
                    setIsAuthorized(false);
                    props.history.push(`/`);
                } else {
                    setIsAuthorized(true);
                    setUsers(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function editUser(id) {
        props.history.push(`/users/edit/${id}`);
    }

    function addUser() {
        props.history.push(`/users/add`);
    }

    function deleteUser(id) {
        const header = {
            "Authorization" : `Bearer ${localStorage.getItem("tokens")}`}
        axios.delete(`http://localhost:8000/api/users/${id}`, {headers: header})
        .then(res => {
            window.location.reload(true);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div className="User">
            <div className="float-md-right"><Button onClick={()=> addUser()}>Add User</Button></div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((value, index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.role_id}</td>
                                    <td>
                                        <Button onClick={()=> editUser(value.id)}>Edit</Button>
                                        <Button onClick={()=> deleteUser(value.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )

}