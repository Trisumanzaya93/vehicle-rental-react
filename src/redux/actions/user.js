import { ACTION_STRING } from "./actionString";
import { updateProfile } from "../../utils/user";

export const getProfileAction = (param) => {
  console.log('param', updateProfile(param));
    return {
      type: ACTION_STRING.userProfile,
      payload: updateProfile(param),
    };
  };