import axios from "axios";

export const Products = axios.create({
  baseURL: "http://localhost:5000/",
});
