import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import "./Register.css";
import axios from 'axios';

export default function Register(props) {

    const initialFormState = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    const[user, setUser] = useState(initialFormState);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      user.name = name;
      user.email = email;
      user.password = password;
      user.password_confirmation = password;
      console.log(user);
      axios.post('http://192.168.30.32:8000/api/register', { user })
        .then(result => {
          console.log(result);
        });
    }
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control 
              type="name" placeholder="Enter name"
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

          <Button variant="primary" type="submit" disabled={!validateForm()}>
            Register
          </Button>
        </Form>
      </div>
    );
  }