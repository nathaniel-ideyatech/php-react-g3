import ActionType from 'constants/ActionType';
import StorageKey from 'constants/StorageKey';

const initialState = {
    token: localStorage.getItem(StorageKey.AUTH_KEY),
    fullName: 'Default User',
    auths: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USER_LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
            };
        }

        case ActionType.USER_LOGIN_FAILURE: {
            return {
                ...state,
                token: '',
            };
        }

        case ActionType.USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                token: '',
                fullName: initialState.fullName,
                auths: initialState.auths
            };
        }

        case ActionType.USER_LOGOUT_FAILURE: {
            return {
                ...state,
                token: '',
                fullName: initialState.fullName,
                auths: initialState.auths
            };
        }

        case ActionType.USER_PROFILE_SUCCESS: {
            return {
                ...state,
                fullName: action.payload.fullName,
                auths: action.payload.auths
            };
        }

        case ActionType.USER_PROFILE_FAILURE: {
            return {
                ...state,
                fullName: initialState.fullName,
                auths: initialState.auths
            };
        }

        case ActionType.USER_VERIFY_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
            };
        }

        case ActionType.USER_VERIFY_FAILURE: {
            return {
                ...state,
                token: initialState.token,
            };
        }

        case ActionType.USER_LIST_SUCCESS: {
            return {
                ...state,
                userList: action.payload.userList._embedded ? action.payload.userList._embedded.baseUsers : action.payload.userList,
            };
        }

        case ActionType.USER_LIST_FAILURE: {
            return {
                ...state,
                userList: initialState.userList,
            };
        }

        case ActionType.USER_SUBORDINATES_SUCCESS: {
            return {
                ...state,
                subordinates: action.payload.subordinates,
            };
        }

        case ActionType.USER_SUBORDINATES_FAILURE: {
            return {
                ...state,
                subordinates: initialState.subordinates,
            };
        }

        case ActionType.MONITOR_WIDGETS_LIST_SUCCESS: {
            return {
                ...state,
                monitorWidgets: action.payload.monitorWidgets,
            };
        }

        case ActionType.MONITOR_WIDGETS_LIST_FAILURE: {
            return {
                ...state,
                monitorWidgets: initialState.monitorWidgets,
            };
        }

        case ActionType.USER_VISIBLE_WIDGETS_SUCCESS: {
            return {
                ...state,
                visibleWidgets: action.payload.visibleWidgets,
            };
        }

        case ActionType.USER_VISIBLE_WIDGETS_FAILURE: {
            return {
                ...state,
                visibleWidgets: initialState.visibleWidgets,
            };
        }

        default: {
            return state;
        }
    };
};