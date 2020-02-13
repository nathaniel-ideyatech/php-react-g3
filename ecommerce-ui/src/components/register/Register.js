import React, { useState } from "react";
import { Button, FormControl, Form, Dropdown } from "react-bootstrap";
import "./Register.css";
import axios from 'axios';

export default function Register(props) {

    const initialFormState = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role_id: ''
    }

    const[user, setUser] = useState(initialFormState);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [role_id, setRoleId] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      user.name = name;
      user.email = email;
      user.password = password;
      user.password_confirmation = password_confirmation;
      user.role_id = role_id;
      axios.post('http://localhost:8000/api/register', user)
        .then(result => {
          console.log(result);
          props.history.push("/");
        });
    }
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control 
              type="text" placeholder="Enter name" max="55"
              value={name} onChange={e => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="email" placeholder="Enter email"
              value={email} onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
          
          <Form.Group>
            <Form.Control 
              type="password" placeholder="Password"
              value={password} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="password" placeholder="Confirm password"
              value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="roleType">
            <Form.Label></Form.Label>
            <Form.Control as="select" value={role_id} onChange={e => setRoleId(e.target.value)}>
              <option value="2">Service Provider</option>
              <option value="3">Customer</option>
            </Form.Control>
          </Form.Group>

          <Button variant={validateForm()? "primary" : "secondary"} type="submit" disabled={!validateForm()}>
            Register
          </Button>
        </Form>
      </div>
    );
  }