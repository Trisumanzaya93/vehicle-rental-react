import axios from "axios";


export const detailVehicle = (id) => {
    const URL = process.env.REACT_APP_HOST + `/vehicle/${id}`;
      console.log('hehe', id);
    return axios.get(URL);
  };

  export const getAllVehicle = (param) => {
    const queryParam = {
      search: param.search ?? '',
      location: param.location ?? '',
      status: param.status ?? '',
      type: param.type ?? '',
      date: param.date ?? '',
      sortBy: '',
      sort: '',
      per_page: param.per_page ?? '10',
      page: param.page ?? '1',
    }
    const URL = process.env.REACT_APP_HOST + 
    `/vehicle?search=${queryParam.search}` +
    `&location=${queryParam.location}&status=${queryParam.status}&type=${queryParam.type}&date=${queryParam.date}` +
    `&sortBy=${queryParam.sortBy}&sort=${queryParam.sort}&per_page=${queryParam.per_page}&page=${queryParam.page}`;
      console.log('getAllVehicleReducer', param);
    return axios.get(URL);
  };

  export const getPopular = () => {
    const URL = process.env.REACT_APP_HOST + `/history/vehiclelocation/lampung`;
      // console.log('heheaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return axios.get(URL);
  };

  export const getVehicleType = (type) => {
    const URL = process.env.REACT_APP_HOST + `/vehicle/type/${type}`;
      // console.log('hehe', id);
    return axios.get(URL);
  };

  export const createVehicle = (body) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const URL = process.env.REACT_APP_HOST + "/vehicle/createVehicle";
      console.log('hehe', body);
    return axios.post(URL, body, {headers: {
      "x-access-token": token,
    }});
  };
  