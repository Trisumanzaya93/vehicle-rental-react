import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  filterVehicle: {
    location: '',
    status: '',
    type: '',
    date: '',
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const setFilterVehicleReducer = (prevState = initialState, action) => {
  const { setFilterVehicle } = ACTION_STRING;
  // membuat logic berdasarkan action
  switch (action.type) {
    case setFilterVehicle:
      console.log("full", prevState);
      const filterVehicle = {
        ...prevState.filterVehicle,
        ...action.payload
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        filterVehicle,
      };

    default:
      return prevState;
  }
};

export default setFilterVehicleReducer;
