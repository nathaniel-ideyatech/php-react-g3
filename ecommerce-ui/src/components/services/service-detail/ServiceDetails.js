import React from "react";
import axios from 'axios';
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";

class ServiceDetails extends React.Component {

    constructor(props) {

        super(props);
        const Service = {
            name: '',
            description: '',
            price: '',
            id: ''
        };
        console.log(props.service)


        this.state = {Service, feedbacks: [], comment: '', rating: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // handleSubmit() {
        
    //     const feedback = {
    //         comment: this.state.comment,
    //         rating: this.state.rating,
    //         service_id: this.state.Service.id
    //     }

    //     const header = {
    //         "Authorization" : `Bearer ${localStorage.getItem('tokens')}`, 
    //         "Content-Type" : 'application/json',
    //         "X-Requested-With" : XMLHttpRequest
    //     }

    //     /* axios.post(`http://localhost:8000/api/feedbacks`, feedback, {headers:header}).then(savedFeedback => {
    //             this.props.history.push('/');
    //             if(savedFeedback) {
                    
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         }); */
    // }

    // componentDidMount() {
    //     const header = {
    //         "Authorization" : `Bearer ${localStorage.getItem('tokens')}`
    //     }
    //         this.state.id = this.props.match.params.id
    //         axios.get(`http://localhost:8000/api/services/${this.state.id}`, {headers: header})
    //         .then(result => {
    //             if (result) {
    //                 const data = result.data;
    //                 this.setState({
    //                     Service: data
                        
    //                 });
    //             }
    //         });

    //         axios.get(`http://localhost:8000/api/feedbacks/service/${this.state.id}`, {headers: header}).then(result2 => {
    //             if (result2) {
    //                 this.setState({
    //                     feedbacks: result2.data
    //                 });
    //             }
    //         });
    // }

    render() {
        return (
            <div className="ServiceDetails">
                <Card style={{ padding: '10px 100px 10px 50px', margin:'50px'}}>
                    <Card.Img style={{ width:'200px', height:'200px', objectFit:'cover'}} variant="left" src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"/>
                    <Card.Body>
                        <Card.Title>{this.state.Service.name}</Card.Title>
                        <Card.Text>₱ {this.state.Service.price}</Card.Text>
                        <Card.Text>Contact Details: { this.state.Service.user? this.state.Service.user.email : 'Not available' }</Card.Text>
                        <Card.Text>{this.state.Service.description}</Card.Text>
                    </Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control 
                                type="text" name="comment"
                                value={this.state.comment} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control 
                                type="text" name="rating"
                                value={this.state.rating} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button  onClick={this.handleSubmit} >
                            Submit
                        </Button>
                    </Form>
                    
                    <ListGroup className="list-group-flush"> 
                    {
                        this.state.feedbacks.map((value, index) => {
                            return (
                                <ListGroupItem key={value.id}>
                                    <div>Review By: {value.user_id}</div>
                                    <span>{value.rating}</span>
                                    <span>{value.comment}</span>
                                </ListGroupItem>
                            )
                        })
                    }
                    </ListGroup>
                </Card>
            </div>
        )
    }
}
export default ServiceDetails