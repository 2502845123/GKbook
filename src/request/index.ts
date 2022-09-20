import Request from "./request";

const AppRequest = new Request({
  baseURL: "http://127.0.0.1:8084",
  timeout: 4000,
  interseptor: {
    beforeRequest(config) {
      return config;
    },
    afterResponse(res) {
      return res.data;
    },
  },
});

export default AppRequest;
