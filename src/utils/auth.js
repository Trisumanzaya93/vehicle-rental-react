import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/auth/login";
export const login = (body) => {
    console.log('hehe', body);
  return axios.post(URL, body);
};