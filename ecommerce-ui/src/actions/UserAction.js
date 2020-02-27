import ActionType from 'constants/ActionType'


export default {
    requestLogin: (email, password) =>{
        return {
            type: ActionType.USER_LOGIN_REQUEST,
            payload: {
                email: email,
                password: password
            }
        }
    },

    successLogin: (token) => {
        return {
            type: ActionType.USER_LOGIN_SUCCESS,
            payload: {
                token: token
            }
        }
    },

    failureLogin: (error) => {
        return {
            type: ActionType.USER_LOGIN_FAILURE,
            payload: {
                error: error
            }
        }
    },

    requestLogout: () =>{
        return {
            type: ActionType.USER_LOGOUT_REQUEST,
        }
    },

    successLogout: () => {
        return {
            type: ActionType.USER_LOGOUT_SUCCESS,
        }
    },

    failureLogin: () => {
        return {
            type: ActionType.USER_LOGOUT_FAILURE,
        }
    },

    requestProfile: () => {
        return {
            type: ActionType.USER_PROFILE_REQUEST,
        };
    },

    successProfile: (profile) => {
        return {
            type: ActionType.USER_PROFILE_SUCCESS,
            payload: { 
                id: profile.id,
                role_id: profile.role_id,
                name: profile.name,
                email: profile.email,               
            },
        };
    },

    failureProfile: (error) => {
        return {
            type: ActionType.USER_PROFILE_FAILURE,
            payload: { error },
        };
    },

    successVerify: (token) => {
        return {
            type: ActionType.USER_VERIFY_SUCCESS,
            payload: { token },
        };
    },

    failureVerify: () => {
        return {
            type: ActionType.USER_VERIFY_FAILURE,
        };
    },
}