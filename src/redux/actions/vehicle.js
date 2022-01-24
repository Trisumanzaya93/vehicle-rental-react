import { ACTION_STRING } from "./actionString";
import {  createVehicle, detailVehicle,getAllVehicle,getPopular,getVehicleType } from "../../utils/vehicle";

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

export const getAllVehicleAction = (body) => {
  return {
    type: ACTION_STRING.getallvehicle,
    payload: getAllVehicle(body),
  };
};

export const setFilterVehicle = (body) => {
  return {
    type: ACTION_STRING.setFilterVehicle,
    payload: body,
  };
};

export const getPopularAction = (body) => {
  return {
    type: ACTION_STRING.getPopular,
    payload: getPopular(body),
  };
};

export const getVehicleTypeAction = (body) => {
  return {
    type: ACTION_STRING.getVehicleType,
    payload: getVehicleType(body),
  };
};
export const createVehicleAction = (body) => {
  return {
    type: ACTION_STRING.createVehicle,
    payload: createVehicle(body),
  };
};