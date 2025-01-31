// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
