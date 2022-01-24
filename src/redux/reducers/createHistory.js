import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
//   userData: {
//     token: JSON.parse(localStorage["token"] || null),
//     photo: "",
//     role: 0,
//   },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const createHistoryReducer = (prevState = initialState, action) => {
  const { createHistory } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case createHistory.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case createHistory.concat("_", Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };

    // case authLogin + rejected:
    case createHistory.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};



export default createHistoryReducer;