import axios from 'axios';


const apiUrl = 'http://localhost:9091/cc'

export default {
    login: (username,password) => {
        // const url = http://localhost:8000/api/login
        // return axios.post(url)
    },

    logout: () => {
        // const url
        // return axios.get(url)
    },

    isLoggedIn: () => {
        // const url = `${apiUrl}/api/test`;
        // return axios.get(url);
    },

    forgotPassword: (username) => {
        // const url = `${apiUrl}/api/user/reset-password?u=${username}`;
        // return axios.get(url);
    },

    resetPassword: (newPassword, resetPasswordKey) => {
        // const url = `${apiUrl}/api/user/reset-password?newPassword=${newPassword}&resetPasswordKey=${resetPasswordKey}`;
        // return axios.post(url);  
    },
}