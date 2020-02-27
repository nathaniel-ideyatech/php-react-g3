import UserReducer from './UserReducer';
import ServiceReducer from './ServiceReducer';


import { combineReducers } from 'redux';

export default combineReducers({
    user: UserReducer,
    service: ServiceReducer,
})

