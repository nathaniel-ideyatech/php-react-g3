import React, { useState } from "react";
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { useAuth } from '../../context/auth'
import RoutePath from 'constants/RoutePath';

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
          const user_role = result.data.user.role_id;
          switch (user_role) {
            case 1:
              props.history.push(RoutePath.ADMIN_DASHBOARD_URL);
              break;
            case 2:
              props.history.push(RoutePath.SERVICE_PROVIDER_DASHBOARD_URL);
              console.log(user_role);
              break;
            case 3:
              props.history.push(RoutePath.CUSTOMER_DASHBOARD_URL);
            default:
              break;
          }
        }
      }).catch(e => {
        props.history.push(RoutePath.HOME_DASHBOARD_URL);
      });
      
  }

  return (
    <div className="Login">
      <nav className="navbar navbar-expand-lg" style={{"position":"fixed", "zIndex":"1"}}>
          <div className="col p-0">
              <DropdownButton id="dropdown-basic-button" className="sidenav-btn" title={<span className="fas fa-align-left"></span>} style={{"display":"inline-block"}}>
                <Dropdown.Item href={RoutePath.HOME_DASHBOARD_URL}>Home</Dropdown.Item>
                <Dropdown.Item href={RoutePath.LOGIN_URL}>Sign in</Dropdown.Item>
                <Dropdown.Item href={RoutePath.REGISTER_URL}>Register</Dropdown.Item>
              </DropdownButton>
              <span style={{"marginLeft" : "50px"}}>
                  <img src="/img/kommune-logo.png"  width="200px" alt="Kommune Logo"/>
              </span>
          </div>
      </nav>
      <div className="LoginForm">
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
    </div>
  );
}