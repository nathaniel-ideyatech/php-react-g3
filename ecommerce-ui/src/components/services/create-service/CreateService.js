import React, { useState } from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import "./CreateService.css";

export default function CreateService(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const initialFormState = {
        name: '',
        description: '',
        price: ''
    }

    const[service, setService] = useState(initialFormState);

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
        <div className="CreateService">
            <h3>Create service</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" placeholder="Name of your service"
                        value={name} onChange={e => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    
                    <Form.Control 
                        type="description" placeholder="Description of the service"
                        value={description} onChange={e => setDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="price" placeholder="Price in Philippine peso"
                        value={price} onChange={e => setPrice(e.target.value)}/>
                </Form.Group>

                <Button variant={validateForm()? "primary" : "secondary"} type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}