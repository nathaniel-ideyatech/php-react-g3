import ActionType from 'constants/ActionType';

const initialState = {
    token: localStorage.getItem("tokens"),
    name: 'Default User',
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
                name: initialState.name,
            };
        }

        case ActionType.USER_LOGOUT_FAILURE: {
            return {
                ...state,
                token: '',
                name: initialState.name,
            };
        }

        case ActionType.USER_PROFILE_SUCCESS: {
            return {
                ...state,
                id: action.payload.id,
                role_id: action.payload.role_id,
                name: action.payload.name,
                email: action.payload.email, 
            };
        }

        case ActionType.USER_PROFILE_FAILURE: {
            return {
                ...state,
                name: initialState.name,
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

        default: {
            return state;
        }
    };
};