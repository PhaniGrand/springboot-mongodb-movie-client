import axios from "axios";

export default axios.create({
  // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
  baseURL: "http://localhost:8080/",
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "access-control-allow-headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  },
  withCredentials: true,
});
