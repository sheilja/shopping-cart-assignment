import axios from "axios";

const URL = "http://localhost:5001";

class API {
  static async getData(endpoint) {
    try {
      const response = await axios.get(`${URL}${endpoint}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default API;
