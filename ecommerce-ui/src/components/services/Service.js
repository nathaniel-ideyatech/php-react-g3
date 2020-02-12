import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Form, Table } from "react-bootstrap";
import "./Service.css";

export default function Service(props) {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/services')
            .then(res => {
                setServices(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function editService(id) {
        props.history.push(`/services/edit/${id}`);
    }


    return(
        <div className="Service">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Active Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((value, index) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.description}</td>
                                    <td>{value.price}</td>
                                    <td>{value.is_active? 'Active' : 'Inactive'}</td>
                                    <td><Button onClick={()=> editService(value.id)}>Edit</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}