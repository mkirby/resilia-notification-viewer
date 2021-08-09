import { userConstants } from "../_constants/userConstants";

// if there is a currentUser logged in localStorage and parse it out
let user = JSON.parse(localStorage.getItem("user"));
// then set it as the initial state
// if there's no currentUser instantiate a empty object
const initialState = user ? { ...user } : {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.CHANGE_SUCCESS:
      // action.userData is an object that will go through combinereducers to become { user: {userData} }
      return action.userData;
    default:
      return { ...state };
  }
}
