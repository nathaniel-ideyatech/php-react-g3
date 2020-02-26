import React from 'react';
import _ from 'underscore';

import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ resolve, resolveTo: Component, redirectTo, ...props }) => {
    return (
        <Route { ...props } render={(props) => {
            return _.isFunction(resolve) && resolve()
                ? <Component { ...props } />
                : <Redirect to={ redirectTo } />
        }} />
    );
};

export default AuthenticatedRoute;