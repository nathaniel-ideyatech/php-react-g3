import React, { useState } from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import "./AddUser.css";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        if(this.state.id) {
            axios.put(`http://localhost:8000/api/users/${this.state.id}`, user)
            .then(result => {
                if (result) {
                    this.props.history.push("/users");
                }
            });
        } else {
            axios.post(`http://localhost:8000/api/users`, user)
            .then(result => {
                if (result) {
                    this.props.history.push("/users");
                }
            });
        }
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.state.id = this.props.match.params.id
            axios.get(`http://localhost:8000/api/users/${this.state.id}`)
            .then(result => {
                if (result) {
                    const data = result.data;
                    this.setState({
                        name: data.name,
                        email: data.email,
                        password: data.password
                    });
                }
            });
        }
    }

    render() {
        return (
            <div className="AddUser">
                <h3>Create user</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" name="name" placeholder="Name of user"
                            value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" name="email" placeholder="Email of user"
                            value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" name="password" placeholder="Password"
                            value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                    
                </Form>
            </div>
        )
    }

}
export default AddUser