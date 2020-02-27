import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserAction from 'actions/UserAction';

const checkLoginStatus = (dispatch) => {
    return () => {
        const cachedToken = localStorage.getItem("tokens")
        if(cachedToken){
            dispatch(UserAction.successVerify(cachedToken))
        } else {
            dispatch(UserAction.failureVerify())
        }
    };
}

const useLoginStatus = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)

    useEffect(checkLoginStatus(dispatch), []);

    return !!token;
}

export default useLoginStatus
