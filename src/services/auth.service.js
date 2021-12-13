
import axios from 'axios';
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    
    async login(username, password) {
        const res = await axios.post(API_URL + 'signin', { username, password });
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username, email, password) {
        return axios.post(API_URL+ 'signup', {username, email, password });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();