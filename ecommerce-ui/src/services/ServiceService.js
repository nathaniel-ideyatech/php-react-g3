import axios from 'axios';

const apiUrl = 'http://localhost:8000'; //local

export default {
    getServiceList: () => {
        const url = `${apiUrl}/api/home/services`;
        return axios.get(url)
    }
}