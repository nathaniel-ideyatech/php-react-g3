import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Form, Table } from "react-bootstrap";
import "./User.css";

export default function User(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setUsers(res.data);
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
        axios.delete(`http://localhost:8000/api/users/${id}`)
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
                                    <td>{value.user_type}</td>
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