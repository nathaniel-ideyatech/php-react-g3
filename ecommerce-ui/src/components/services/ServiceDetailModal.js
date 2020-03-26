import React, {useState,useEffect} from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ServiceDetails, Feedback} from 'components';
import { FeedbackService } from 'services'
import { useSelector, useDispatch } from 'react-redux';



const ServiceDetailModal = ({serviceDetail, isShown, onClose}) => {
    const serviceName = serviceDetail ? serviceDetail.name : '';
    const serviceDesc = serviceDetail ? serviceDetail.description : '';
    const serviceId = serviceDetail ? serviceDetail.id : null;

    const user = useSelector(state => state.user)
    
    const onCancel = () =>{
        onClose()
    }
    const [feedbacks,setFeedbacks] = useState([])

    const getFeedbacks = async (event) => {
        const {data} = await FeedbackService.getFeedbackByService(serviceId)
        setFeedbacks(data)
        console.log(data)
    };

    const handleClick = () =>{
        getFeedbacks()
    }

    return (
        <Modal show={ isShown } onHide={onCancel} centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    {serviceName}
                </h5>
            </Modal.Header>

            <Modal.Body> 
                 {serviceDesc}

                 {/* <div style={{'marginTop':'20px'}}>

                    <Button onClick={handleClick}>
                        view all reviews and ratings
                    </Button>
                    <div> 
                        {
                            
                            feedbacks.map((feedback) => {
                                return <Feedback feedback={feedback} /> 
                            })
                        }
                    </div>
                 </div> */}
            </Modal.Body>
        </Modal>
    )
}

export default ServiceDetailModal