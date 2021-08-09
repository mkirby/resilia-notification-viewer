import { userConstants } from "../_constants/userConstants";
import { userServices } from "../_services/userServices";

// exports functions/ actions related to users
export const userActions = { changeUser };

function changeUser(id) {
  return (dispatch) => {
    userServices.changeUser(id).then(
      (userData) => {
        dispatch(success(userData));
      },
      (error) => {
        console.log("Change User failed: ", error);
      }
    );
  };

  function success(userData) {
    return { type: userConstants.CHANGE_SUCCESS, userData };
  }
}
