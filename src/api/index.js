//Import Axios
import axios from "axios";

//Create API call url
const url = "http://localhost5000.posts";

export const fetchPosts = () => axios.get(url);