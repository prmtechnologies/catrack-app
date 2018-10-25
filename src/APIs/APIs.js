import axios from "axios";

const baseUrl = "https://catrack-api.herokuapp.com";

const APIs = {
  /**Dishes */
  getDishes(pageNumber, pageSize) {
    var url = `${baseUrl}/dishes/?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return axios.get(url).then(res => res);
  }
};

export default APIs;
