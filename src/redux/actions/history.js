import { ACTION_STRING } from "./actionString";
import { createHistory,detailHistory  } from "../../utils/history";

export const createHistoryAction = (body) => {

  console.log("dimana ini", createHistory(body));
    return {
      type: ACTION_STRING.createHistory,
      payload: createHistory(body),
    };
  };

  export const getDetailHistoryAction = (param,userId) => {
    return {
      type: ACTION_STRING.detailHistory,
      payload: detailHistory(param,userId),
    };
  };