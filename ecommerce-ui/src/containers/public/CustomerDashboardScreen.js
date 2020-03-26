import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { 
    CustomerDashboardHeader,
    CustomerDashboardSideBar,
    CustomerDashboardSideNav,
    CustomerDashboardServiceFeed,

} from 'components'

import { UserService } from 'services';

import UserAction from 'actions/UserAction';


const getCurrentUser = async (dispatch) => {
    dispatch(UserAction.requestProfile());
    try {
        const { data } = await UserService.getCurrentUser();
        dispatch(UserAction.successProfile(data))
    }
    catch (error) {
        dispatch(UserAction.failureProfile(error));
    }
};

const onInitialize = (dispatch) => {
    return () =>{
        getCurrentUser(dispatch)
    }
}

const HomeScreen = ({location}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    
    

    return (
        <div>
            <CustomerDashboardHeader />
            <div className="wrapper" style={{"position":"relative","top":"100px"}}>
                    <CustomerDashboardSideBar>
                    </CustomerDashboardSideBar>
                <div className="container-fluid">
                    <CustomerDashboardServiceFeed/>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen