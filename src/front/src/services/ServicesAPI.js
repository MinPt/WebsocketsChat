import axios from "axios";

export const apiEndpoint = "http://localhost:8080/";

class ServiceApi {
  constructor(apiEndpoint) {
    this.api = axios.create({
      baseURL: apiEndpoint,
    });
  }
}

export default new ServiceApi(apiEndpoint).api;
