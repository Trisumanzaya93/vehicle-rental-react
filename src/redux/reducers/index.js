import { combineReducers } from "redux";
// menggabungkan semua reducer menjadi 1
import authReducer from "./auth";


const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;