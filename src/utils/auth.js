import axios from "axios";

export const login = (body) => {
  const URL = process.env.REACT_APP_HOST + "/auth/login";
    console.log('hehe', body);
  return axios.post(URL, body);
};

export const signUp = (body) => {
  const URL = process.env.REACT_APP_HOST + "/auth/signup";
    console.log('hehe', body);
  return axios.post(URL, body);
};