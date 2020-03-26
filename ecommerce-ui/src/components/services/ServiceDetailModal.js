import React, {useState,useEffect} from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { ServiceDetails} from 'components';
import { FeedbackService } from 'services'

const ServiceDetailModal = ({serviceDetail, isShown, onClose}) => {
    const serviceName = serviceDetail ? serviceDetail.name : '';
    const serviceDesc = serviceDetail ? serviceDetail.description : '';
    const serviceId = serviceDetail ? serviceDetail.id : null;

    const onCancel = () =>{
        onClose()
    }
    const [feedbacks,setFeedbacks] = useState([])

    const getFeedbacks = async () => {
        try {
            const {data} = await FeedbackService.getFeedbackByService(serviceId);
            setFeedbacks(data)
        }
        catch (error) {
            console.log(error)
        }
    };
    
    // getFeedbacks()

    return (
        <Modal show={ isShown } onHide={onCancel} centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    {serviceName}
                </h5>
            </Modal.Header>

            <Modal.Body> 
                 {serviceDesc}

                 <div style={{'marginTop':'20px'}}>
                    Reviews and Ratings:
                    
                 </div>
            </Modal.Body>
        </Modal>
    )
}

export default ServiceDetailModal