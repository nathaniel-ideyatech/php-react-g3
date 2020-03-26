import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth  } from '../../context/auth';
import axios from 'axios';
import { composeInitialProps } from 'react-i18next';

import { ServiceDetailModal, MediaCard } from 'components';

import ServiceAction from 'actions/ServiceAction';
import { ServiceService } from 'services';
import { useSelector, useDispatch } from 'react-redux';

import {Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';



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

const useStyles = makeStyles({
  root: { 
    marginLeft: '20%',
    display: 'inline-block'
  },
});


const CustomerDashboardServiceFeed = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const services = useSelector(state => state.service.serviceList);



    useEffect(onInitialize(dispatch), []);

    return (
        <div>
            <div className={classes.root}>
                {
                    services.map((value,index) => {
                        return <MediaCard serviceDetail={value} key={value.id}/>
                    })
                }
            </div>
        </div>
    )
}


export default CustomerDashboardServiceFeed 