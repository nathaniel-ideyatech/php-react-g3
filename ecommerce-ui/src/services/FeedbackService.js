import axios from 'axios';

const apiUrl = 'http://localhost:8000'; //local

export default {
    getFeedbackList: () => {
        const url = `${apiUrl}/api/feedbacks/`;
        return axios.get(url)
    },

    postFeedback: (body) => {
        const url = `${apiUrl}/api/feedbacks/`;
        return axios.post(url,body)
    },

    getFeedbackByService: (id) => {
        const url =`${apiUrl}/api/feedbacks/service/${id}`;
        return axios.get(url)
    }
}