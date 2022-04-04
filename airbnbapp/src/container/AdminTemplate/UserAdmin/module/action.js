import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListUserAdmin = () => {
  return (dispatch) => {
    dispatch(actFetchListUserAdminRequest);
    api
      .get("users")
      .then((result) => {
        dispatch(actFetchListUserAdminSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListUserAdminFailed(error));
      });
  };
};
const actFetchListUserAdminRequest = () => {
  return {
    type: ActionType.GET_LIST_USER_ADMIN_REQUEST,
  };
};
const actFetchListUserAdminSuccess = (data) => {
  return {
    type: ActionType.GET_LIST_USER_ADMIN_SUCCESS,
    payload: data,
  };
};
const actFetchListUserAdminFailed = (error) => {
  return {
    type: ActionType.GET_LIST_USER_ADMIN_FAILED,
    payload: error,
  };
};

export const actGetLocations = () => {
  return (dispatch) => {
    dispatch(actGetLocationsRequest);
    api
      .get("locations")
      .then((result) => {
        dispatch(actGetLocationsSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetLocationsFailed(error));
      });
  };
};
const actGetLocationsRequest = () => {
  return {
    type: ActionType.GET_LOCATIONS_REQUEST,
  };
};
const actGetLocationsSuccess = (data) => {
  return {
    type: ActionType.GET_LOCATIONS_SUCCESS,
    payload: data,
  };
};
const actGetLocationsFailed = (error) => {
  return {
    type: ActionType.GET_LOCATIONS_FAILED,
    payload: error,
  };
};
