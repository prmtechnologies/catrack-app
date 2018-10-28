import axios from "axios";

const baseUrl = "https://catrack-api.herokuapp.com";

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
    console.log("DISH OBJECT INSIDE PUT API");
    console.log(data);
    var url = `${baseUrl}/dishes/${_id}`;
    const res = await axios.put(url, data);
    console.log("PUT DISH Result");
    console.log(res);
    return res;
  },

  async postDish(data) {
    console.log("DISH OBJECT INSIDE POST API");
    console.log(data);

    var url = `${baseUrl}/dishes`;
    const res = await axios.post(url, data);
    return res;
  }
};

export default APIs;
