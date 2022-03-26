import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListUser = () => {
  return (dispatch) => {
    dispatch(actFetchListUserRequest);
    api
      .get("users/pagination")
      .then((result) => {
        dispatch(actFetchListUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListUserFailed(error));
      });
  };
};
const actFetchListUserRequest = () => {
  return {
    type: ActionType.GET_USER_REQUEST,
  };
};
const actFetchListUserSuccess = (data) => {
  return {
    type: ActionType.GET_USER_SUCCESS,
    payload: data,
  };
};
const actFetchListUserFailed = (error) => {
  return {
    type: ActionType.GET_USER_FAILED,
    payload: error,
  };
};
