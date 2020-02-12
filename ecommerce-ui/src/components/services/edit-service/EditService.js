import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import './EditService.css'

export default function EditService(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [service, setService] = useState({});

    async function getService(id) {
        let response = await axios.get(`http://localhost:8000/api/services/${id}`)
        setService(response)
    }

    useEffect(() => {
        const { id } = props.match.params;
        getService(id);
        console.log(service);
        axios.get(`http://localhost:8000/api/services/${id}`)
            .then(res => {
                setService(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function validateForm() {
        return name.length > 0 && description.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        service.name = name;
        service.description = description;
        service.price = price;
        axios.post('http://localhost:8000/api/services', service)
            .then(result => {
                if (result) {
                    props.history.push("/services");
                }
            });
    }

    return (
        <div className="EditService">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" placeholder="Enter name"
                        value={name} on onChange={e => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type="description" placeholder="Enter description"
                        value={description} onChange={e => setDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="price" placeholder="Enter price"
                        value={price} onChange={e => setPrice(e.target.value)}/>
                </Form.Group>

                <Button variant={validateForm()? "primary" : "secondary"} type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}