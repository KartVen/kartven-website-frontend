import axios from "axios";
import AuthService from "./AuthService";

const CATEGORY_BASE_API_URL = "/api/category"

class CategoryService {

    async getAllCategories() {
        return await axios.get(CATEGORY_BASE_API_URL);
    }

    async createCategory(categoryData) {
        return await axios.post(CATEGORY_BASE_API_URL, categoryData, {
                headers: AuthService.getAuthHeader()
            });
    }

    async getCategoryById(categoryId) {
        return await axios.get(`${CATEGORY_BASE_API_URL}/${categoryId}`);
    }

    async updateCategory(categoryId, categoryData) {
        return await axios.put(`${CATEGORY_BASE_API_URL}/${categoryId}`, categoryData, {
                headers: AuthService.getAuthHeader()
            });
    }

}

export default new CategoryService()