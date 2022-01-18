import axios from "axios";


export const updateProfile = (param) => {
    const URL = process.env.REACT_APP_HOST + "/users/profile";
      console.log('hehe', param);
    return axios.get(URL, param);
  };