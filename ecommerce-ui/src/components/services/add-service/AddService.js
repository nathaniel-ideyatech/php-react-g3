import React, { useState } from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import "./AddService.css";

class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            id: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const service = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price
        }
        if(this.state.id) {
            axios.put(`http://localhost:8000/api/services/${this.state.id}`, service)
            .then(result => {
                if (result) {
                    this.props.history.push("/services");
                }
            });
        } else {
            axios.post(`http://localhost:8000/api/services`, service)
            .then(result => {
                if (result) {
                    this.props.history.push("/services");
                }
            });
        }
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.state.id = this.props.match.params.id
            axios.get(`http://localhost:8000/api/services/${this.state.id}`)
            .then(result => {
                if (result) {
                    const data = result.data;
                    this.setState({
                        name: data.name,
                        description: data.description,
                        price: data.price
                    });
                }
            });
        }
    }

    back() {
        
    }

    render() {
        return (
            <div className="AddService">
                <h3>Create service</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" name="name" placeholder="Name of your service"
                            value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" name="description" placeholder="Description of the service"
                            value={this.state.description} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                            type="number" name="price" placeholder="Price of the service"
                            value={this.state.price} onChange={this.handleChange}
                            min="1" step="any"/>
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                    
                </Form>
            </div>
        )
    }

}
export default AddService

/* export default function AddService(props) {
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
        <div className="AddService">
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

                <Button>Back</Button>
                <Button variant={validateForm()? "primary" : "secondary"} type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
                
            </Form>
        </div>
    )
} */