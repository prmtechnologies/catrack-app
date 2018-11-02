import axios from "axios";

const baseUrl = "https://catrack-api.herokuapp.com";
// const baseUrl = "http://localhost:3000";

const APIs = {
  /**Dishes */
  async getDishes(pageNumber, pageSize) {
    var url = `${baseUrl}/dishes/?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    const res = await axios.get(url);
    return res;
  },

  async getDish(_id) {
    var url = `${baseUrl}/dishes/${_id}`;
    const res = await axios.get(url);
    return res;
  },

  async putDish(_id, data) {
    var url = `${baseUrl}/dishes/${_id}`;
    const res = await axios.put(url, data);
    return res;
  },

  async postDish(data) {
    var url = `${baseUrl}/dishes`;
    const res = await axios.post(url, data);
    return res;
  },

  async deleteDish(_id) {
    var url = `${baseUrl}/dishes/${_id}`;
    const res = await axios.delete(url);
    return res;
  }
};

export default APIs;
