import axios from "axios";

const instance = axios.create({
  baseURL: "https://travel-planner-app.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
