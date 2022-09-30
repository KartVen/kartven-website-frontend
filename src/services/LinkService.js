import axios from "axios";

const LINK_BASE_API_URL = "/api/link"

class LinkService {
    
    async createLink(linkData){
        return await axios.post(LINK_BASE_API_URL, linkData);
    }

    async getLinkById(linkId){
        return await axios.get(`${LINK_BASE_API_URL}/${linkId}`);
    }

    async updateLink(linkId, linkData){
        return await axios.put(`${LINK_BASE_API_URL}/${linkId}`, linkData);
    }
}

export default new LinkService();