import ActionType from 'constants/ActionType';

export default {    
    successServiceList: (serviceList) => {
        // console.log(serviceList)
        return {
            type: ActionType.SERVICE_LIST_SUCCESS,
            payload: { serviceList },
        };
    },

    failureServiceList: (error) => {
        return {
            type: ActionType.SERVICE_LIST_FAILURE,
            payload: { error },
        };
    },
}