import axios from "axios"

export default axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  },
});