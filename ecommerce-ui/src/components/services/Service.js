import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Table } from "react-bootstrap";
import "./Service.css";
import { useAuth  } from '../../context/auth';

export default function Service(props) {

    const { authTokens  } = useAuth();
    const [services, setServices] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState([false]);

    useEffect(() => {
        const data = localStorage.getItem("tokens");
        const header = {
            "Authorization" : `Bearer ${data}`}

        axios.get('http://localhost:8000/api/services', {headers: header})
            .then(res => {
                if(res.data.error) {
                    setIsAuthorized(false);
                    props.history.push(`/`);
                } else {
                    setIsAuthorized(true);
                    setServices(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function editService(id) {
        props.history.push(`/services/edit/${id}`);
    }

    function addService() {
        props.history.push(`/services/add`);
    }

    function deleteService(id) {
        const header = {
            "Authorization" : `Bearer ${localStorage.getItem('tokens')}`
        }
        axios.delete(`http://localhost:8000/api/services/${id}`, {headers: header})
        .then(res => {
            window.location.reload(true);
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <div className="Service">
            <div className="float-md-right"><Button onClick={()=> addService()}>Add Service</Button></div>
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
                                    <td>
                                        <Button onClick={()=> editService(value.id)}>Edit</Button>
                                        <Button onClick={()=> deleteService(value.id)}>Delete</Button>
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