import { userConstants } from "../_constants/userConstants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { ...user } : {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.CHANGE_SUCCESS:
      // this is an object that will go through combinereducers to become { user: {userData} }
      return action.userData;
    default:
      return { ...state };
  }
}
