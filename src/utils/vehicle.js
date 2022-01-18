import axios from "axios";


export const detailVehicle = (id) => {
    const URL = process.env.REACT_APP_HOST + `/vehicle/${id}`;
      console.log('hehe', id);
    return axios.get(URL);
  };