import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initialFormState = {
    email: '',
    password: '',
  }

  const[user, setUser] = useState(initialFormState);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const  handleSubmit = async (event) => {
    event.preventDefault();
    user.email = email;
    user.password = password;
    // const 
    axios.post('http://localhost:8000/api/login', user)
      .then(result => {
        console.log("Logged in...",result)
        props.history.push("/");
    });
  }

  const onLogin = async (event) => {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" placeholder="Enter email" autoFocus
            value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant={validateForm()? "primary" : "secondary"} type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}