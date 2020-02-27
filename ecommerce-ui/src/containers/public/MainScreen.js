import React, {useEffect} from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import { HomeScreen, CustomerDashboardScreen, ServiceProviderDashboardScreen, ManagementScreen } from 'containers';

import { AuthenticatedRoute } from 'components';
import RoutePath from 'constants/RoutePath';

import { useLoginStatus } from 'hooks';

import { UserService } from 'services';

import { useSelector, useDispatch } from 'react-redux';

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

const rolesEnum = {
    1: 'admin', 
    2: 'service provider', 
    3: 'customer'
}

const MainScreen = ({location}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const isLoggedIn = false;
    const isLogged = useLoginStatus();

    useEffect(onInitialize(dispatch),[]);

    
    const role_type = isLogged ? rolesEnum[user.role_id] : 'general'


    return (
        <div>
            <Switch>
                <AuthenticatedRoute
                    path={ RoutePath.HOME_DASHBOARD_URL }
                    resolve={()=>!isLogged}
                    resolveTo={ HomeScreen }
                    redirectTo={ RoutePath.CUSTOMER_DASHBOARD_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.CUSTOMER_DASHBOARD_URL }
                    resolve={()=>isLogged}
                    resolveTo={ CustomerDashboardScreen }
                    redirectTo={ RoutePath.HOME_DASHBOARD_URL }
                >
                </AuthenticatedRoute>

                <Redirect to={RoutePath.HOME_DASHBOARD_URL} />
            </Switch>
        </div>
    )
}

export default withRouter(MainScreen)