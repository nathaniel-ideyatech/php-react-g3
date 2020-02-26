import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { useAuth } from '../../context/auth'

export default function Login(props) {
  const { setAuthTokens } = useAuth();
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
    
    const data =  axios.post('http://localhost:8000/api/login', user)
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data.access_token);
          props.history.push("/services");
          //setLoggedIn(true);
        } else {
          //setIsError(true);
        }
      }).catch(e => {
        //setIsError(true);
      });
      /* .then(result => {
        props.history.push("/");
      }); */
      
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