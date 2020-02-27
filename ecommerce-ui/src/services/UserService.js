import axios from 'axios';

const apiUrl = 'http://localhost:8000'; //local
const token = localStorage.getItem("tokens");
const header = { "Authorization" : `Bearer ${token}` }

export default {
    getCurrentUser: () => {
        const url = `${apiUrl}/api/user/profile/current-user`;
        console.log(url)
        return axios.get(url,{headers: header})
    }
}