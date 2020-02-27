import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth  } from '../../context/auth';
import axios from 'axios';
import { composeInitialProps } from 'react-i18next';


const CustomerDashboardServiceFeed = (props) => {

    //const { authTokens  } = useAuth();
    const [services, setServices] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState([false]);

    useEffect(() => {
        const data = localStorage.getItem("tokens");
        const header = {
            "Authorization" : `Bearer ${data}`}

        axios.get('http://localhost:8000/api/home/services', {headers: header})
            .then(res => {
                if(res.data.error) {
                    setIsAuthorized(false);
                } else {
                    setIsAuthorized(true);
                    setServices(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <section>{
                services.map((value, index) => {
                    return (
                        <Card style={{ padding: '20px 100px 10px 100px', margin:'50px'}} key={value.id}>
                            <Card.Img style={{ width:'100%', height:'200px', objectFit:'cover'}} variant="left" src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"/>
                            <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                <Card.Text>₱ {value.price}</Card.Text>
                                <Card.Text>{ value.description }</Card.Text>
                                <Card.Text>Contact Details: { value.user? value.user.email : 'Not available' }</Card.Text>
                                <Card.Link href={'/services/view-details/'+ value.id} >See More</Card.Link>
                                
                            </Card.Body>
                        </Card>
                    )

                })
            }

        </section>
    )
}


export default CustomerDashboardServiceFeed 