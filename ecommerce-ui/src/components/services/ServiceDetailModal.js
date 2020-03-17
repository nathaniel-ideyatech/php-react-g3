import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { ServiceDetails} from 'components';

const ServiceDetailModal = ({serviceDetail, isShown, onClose}) => {
    const serviceName = serviceDetail ? serviceDetail.name : '';
    const serviceDesc = serviceDetail ? serviceDetail.description : ''

    const onCancel = () =>{
        onClose()
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
            </Modal.Body>
        </Modal>
    )
}

export default ServiceDetailModal