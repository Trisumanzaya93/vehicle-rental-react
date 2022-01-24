import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  allvehicle: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getAllVehicleReducer = (prevState = initialState, action) => {
  const { getallvehicle } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getallvehicle.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getallvehicle.concat("_", Fulfilled):
      const data = action.payload.data.data;
      console.log("prevState", prevState);
      const allvehicle = {
        ...prevState.allvehicle,
        allvehicle:data
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        allvehicle,
      };

    // case authLogin + rejected:
    case getallvehicle.concat("_", Rejected):
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

export default getAllVehicleReducer;
