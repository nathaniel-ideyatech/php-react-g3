import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth  } from '../../context/auth';
import axios from 'axios';
import { composeInitialProps } from 'react-i18next';

import { ServiceDetailModal } from 'components';

import ServiceAction from 'actions/ServiceAction';
import { ServiceService } from 'services';
import { useSelector, useDispatch } from 'react-redux';

import {Button} from 'react-bootstrap';

<<<<<<< HEAD

=======
const CustomerDashboardServiceFeed = (props) => {
>>>>>>> 300857a6259be3161fa5fb1728846da9cf68daca

const getServiceList = async (dispatch) => {
    try {
        const { data } = await ServiceService.getServiceList();
        console.log(data)
        dispatch(ServiceAction.successServiceList(data))
    }
    catch (error) {
        dispatch(ServiceAction.failureServiceList(error));
    }
};

const onInitialize = (dispatch) => {
    return () =>{
        getServiceList(dispatch)
    }
}


const CustomerDashboardServiceFeed = (props) => {
    const dispatch = useDispatch()
    //const { authTokens  } = useAuth();
    // const [services, setServices] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState([false]);

    const [ uiState, setUiState ] = useState({
        selectedService: null,
        showServiceDetailModal: false,
        filter: {
            name: '',
            price: 0,
        }
    })

    const services = useSelector(state => state.service.serviceList);
    console.log(services)

    // console.log(services2)

    const onRequestSeeDetails = (value) =>{
        console.log(value)
        setUiState({
            ...uiState,
            showServiceDetailModal: true,
            selectedService: value
        })
    }

    const onCancelShowDetails = () =>{
        setUiState({
            ...uiState,
            showServiceDetailModal: false
        })
    }



    useEffect(onInitialize(dispatch), []);

    return (
        <div>
            <div style={{"position":"relative","width":"60%", "left":"25%"}}>
                {
                    services.map((value, index) => {
                        return (
                            <Card style={{ padding: '10px 100px 10px 50px', margin:'50px'}} key={value.id}>
                                <Card.Img style={{ width:'200px', height:'200px', objectFit:'cover'}} variant="left" src="https://img1.wsimg.com/isteam/stock/1352/:/"/>
                                <Card.Body>
                                    <Card.Title>{value.name}</Card.Title>
                                    <Card.Text>{ value.description }</Card.Text>
                                    <Button onClick={()=>onRequestSeeDetails(value)}>See More</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

            <ServiceDetailModal 
                serviceDetail={uiState.selectedService} 
                isShown={uiState.showServiceDetailModal} 
                onClose={onCancelShowDetails} 
            />
        </div>
    )
}


export default CustomerDashboardServiceFeed 