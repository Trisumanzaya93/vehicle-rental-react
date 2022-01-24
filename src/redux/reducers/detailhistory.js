import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  dataHistory: {
    id: 0,
    user_id: 0,
    vehicle_id: 0,
    quantity_total: 0,
    start_date: "",
    return_date: "",
    booking_code: "",
    payment_code: "",
    status: "",
    total_price: 0,
    vehiclename: "",
    category: "",
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const detailHistoryReducer = (prevState = initialState, action) => {
  const { detailHistory } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case detailHistory.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case detailHistory.concat("_", Fulfilled):
      const data = action.payload.data.data;
      console.log("full", data);
      const dataHistory = {
        ...prevState.datavehicle,
        id: data.id,
        user_id: data.user_id,
        vehicle_id: data.vehicle_id,
        quantity_total: data.quantity_total,
        start_date: data.start_date,
        return_date: data.return_date,
        booking_code: data.booking_code,
        payment_code: data.payment_code,
        status: data.status,
        total_price: data.total_price,
        vehiclename: data.vehiclename,
        category: data.category,
        // token: data.data.token,
        // category: data.category,
        // location: data.location,
        // photo: data.photo,
        // price: data.price,
        // status: data.status,
        // stock: data.stock,
        // vehiclename: data.vehiclename,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        dataHistory,
      };

    // case authLogin + rejected:
    case detailHistory.concat("_", Rejected):
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

export default detailHistoryReducer;
