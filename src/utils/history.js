import axios from "axios";

export const createHistory = (body) => {
  const token = JSON.parse(localStorage.getItem("token"));
    const URL = process.env.REACT_APP_HOST + "/history/createhistory";
    return axios.post(URL, body , {headers: {
      "x-access-token": token,
    }});
  };

  export const detailHistory = (param) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const paramString = {
      search: param.search ?? '',
      sortBy: param.sortBy ?? '',
      sort: param.sort ?? '',
    }
    const URL = process.env.REACT_APP_HOST + `/history?search=${paramString.search}&sortBy=${paramString.sortBy}&sort=${paramString.sort}`;
    return axios.get(URL, {headers: {
      "x-access-token": token,
    }});
  };