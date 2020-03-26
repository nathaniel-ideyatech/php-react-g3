import React, {useState} from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { ServiceDetails} from 'components';

import { FeedbackService } from 'services'

import StarRatings from 'react-star-ratings';
import { Toast } from 'components';
import { ToastContainer, toast } from 'react-toastify';

const ServiceFeedbackModal = ({serviceDetail, isShown, onClose}) => {
    const serviceName = serviceDetail ? serviceDetail.name : '';
    const serviceDesc = serviceDetail ? serviceDetail.description : ''

    const [rating,setRating] = useState(2)
    const [comment,setcomment] = useState('')
    // console.log(localStorage.getItem('tokens'))


    const initialFeedbackFormState = {
        service_id: null,
        rating: 0,
        comment: '',
    }

    const [feedbackForm,setFeedbackForm] = useState(initialFeedbackFormState)
 

    const onCancel = () =>{
        onClose()
    }

    const submitFeedback = async (event) =>{
        feedbackForm.comment = comment;
        feedbackForm.rating = rating
        feedbackForm.service_id = serviceDetail.id
        FeedbackService.postFeedback(feedbackForm)

        onClose()
    }

    const changeRating = (event) =>{
        setRating(event)
    }

    return (
        <Modal show={ isShown } onHide={onCancel} centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    {serviceName}
                </h5>
            </Modal.Header>

            <Modal.Body> 
                <Form 
                    // onSubmit={submitFeedback}
                >
                    <Form.Group>
                        <StarRatings
                            rating={rating}
                            starRatedColor="blue"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name='rating'
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Comment:
                        </Form.Label>
                        <Form.Control 
                            type="textarea" 
                            placeholder="What's on your mind?"
                            value={comment} 
                            onChange={e => setcomment(e.target.value)}
                        />

                        
                    </Form.Group>

                    <Button onClick={submitFeedback}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ServiceFeedbackModal