import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  vehicletype: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getVehicleTypeReducer = (prevState = initialState, action) => {
  const { getVehicleType } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getVehicleType.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getVehicleType.concat("_", Fulfilled):
      const data = action.payload.data.data;
    //   console.log("prevState", prevState);
      const vehicletype = {
        ...prevState.vehicletype,
        vehicletype:data
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        vehicletype,
      };

    // case authLogin + rejected:
    case getVehicleType.concat("_", Rejected):
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

export default getVehicleTypeReducer;
