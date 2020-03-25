import React, {useEffect} from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import { HomeScreen, CustomerDashboardScreen, ServiceProviderDashboardScreen, ManagementScreen } from 'containers';

import { AuthenticatedRoute } from 'components';
import RoutePath from 'constants/RoutePath';

import { useLoginStatus } from 'hooks';

import { UserService } from 'services';

import { useSelector, useDispatch } from 'react-redux';

import UserAction from 'actions/UserAction';
import Login from 'components/login/Login';
import Main from 'components/Main';


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
                    path={ RoutePath.LOGIN_URL }
                    resolve={()=>!isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.CUSTOMER_DASHBOARD_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.REGISTER_URL }
                    resolve={()=>!isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.CUSTOMER_DASHBOARD_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.USERS_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.USERS_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.ADD_USER_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.ADD_USER_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.EDIT_USER_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.EDIT_USER_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.SERVICES_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.SERVICES_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.ADD_SERVICE_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.ADD_SERVICE_URL}
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.EDIT_SERVICE_URL }
                    resolve={()=>isLogged}
                    resolveTo={ Main }
                    redirectTo={ RoutePath.EDIT_SERVICE_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.ADMIN_DASHBOARD_URL }
                    resolve={()=>isLogged}
                    resolveTo={ CustomerDashboardScreen }
                    redirectTo={ RoutePath.HOME_DASHBOARD_URL }
                >
                </AuthenticatedRoute>

                <AuthenticatedRoute
                    path={ RoutePath.SERVICE_PROVIDER_DASHBOARD_URL }
                    resolve={()=>isLogged}
                    resolveTo={ CustomerDashboardScreen }
                    redirectTo={ RoutePath.HOME_DASHBOARD_URL }
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