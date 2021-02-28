import axios from "axios";

/* base url */

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.get("/action");

export default instance;
