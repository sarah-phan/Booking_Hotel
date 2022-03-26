import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListLocation = () => {
  return (dispatch) => {
    dispatch(actFetchListLocationRequest);
    api
      .get("locations")
      .then((result) => {
        dispatch(actFetchListLocationSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListLocationFailed(error));
      });
  };
};
const actFetchListLocationRequest = () => {
  return {
    type: ActionType.GET_LIST_LOCATION_REQUEST,
  };
};
const actFetchListLocationSuccess = (data) => {
  return {
    type: ActionType.GET_LIST_LOCATION_SUCCESS,
    payload: data,
  };
};
const actFetchListLocationFailed = (error) => {
  return {
    type: ActionType.GET_LIST_LOCATION_FAILED,
    payload: error,
  };
};
