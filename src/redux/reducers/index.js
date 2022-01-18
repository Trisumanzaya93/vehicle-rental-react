import { combineReducers } from "redux";
// menggabungkan semua reducer menjadi 1
import authReducer from "./auth";
import authSignUpReducer from "./authSignUp"
import getProfileReducer from "./updateprofile"
import detailVehicleReducer from "./detailvehicle";
import setReservationReducer from "./setReservation";


const reducers = combineReducers({
  auth: authReducer,
  signUp : authSignUpReducer,
  getProfile : getProfileReducer,
  detailVehicle : detailVehicleReducer,
  setReservation: setReservationReducer
});

export default reducers;