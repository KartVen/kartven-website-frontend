import axios from "axios";
import AuthService from "./AuthService";

const LINK_BASE_API_URL = "/api/link"

class LinkService {

    async createLink(linkData) {
        return await axios.post(LINK_BASE_API_URL, linkData, {
                headers: AuthService.getAuthHeader()
            });
    }

    async getLinkById(linkId) {
        return await axios.get(`${LINK_BASE_API_URL}/${linkId}`);
    }

    async updateLink(linkId, linkData) {
        return await axios.put(
            `${LINK_BASE_API_URL}/${linkId}`, linkData, {
                headers: AuthService.getAuthHeader()
            });
    }
}

export default new LinkService();