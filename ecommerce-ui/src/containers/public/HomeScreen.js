import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { 
    CustomerDashboardHeader,
    CustomerDashboardSideBar,
    CustomerDashboardSideNav,
    CustomerDashboardServiceFeed,

} from 'components'

import FocusLock from 'react-focus-lock';


const HomeScreen = () => {
    return (
        <div>
            
            <CustomerDashboardHeader />


            <div className="wrapper">
                
                    <CustomerDashboardSideBar>


                    </CustomerDashboardSideBar>
                {/* <div className="container-fluid">
                    <CustomerDashboardServiceFeed />
                </div> */}
            </div>
        </div>
    )
}

export default HomeScreen