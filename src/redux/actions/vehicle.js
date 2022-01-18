import { ACTION_STRING } from "./actionString";
import {  detailVehicle } from "../../utils/vehicle";

export const getDetailVehicleAction = (body) => {
  return {
    type: ACTION_STRING.detailVehicle,
    payload: detailVehicle(body),
  };
};

export const setReservation = (body) => {
  return {
    type: ACTION_STRING.setReservation,
    payload: body,
  };
};