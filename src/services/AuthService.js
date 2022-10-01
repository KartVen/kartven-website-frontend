import axios from "axios";

const AUTH_BASE_API_URL = "/api"

class AuthService {

    async login(username, password) {
        let userData = {username, password};
        return await axios.post(`${AUTH_BASE_API_URL}/signin`, userData)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem(
                        "userSession",
                        JSON.stringify(res.data)
                    )
                }
                return res.data;
            })
    }

    logout() {
        localStorage.removeItem("userSession");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("userSession"))
    }

    getAuthHeader() {
        const userSession = localStorage.getItem("userSession");
        const userToken = JSON.parse(userSession.token);

        if (userSession && userToken) {
            return {Authorization: 'Bearer ' + userToken};
        } else
            return {};
    }

}

export default new AuthService();