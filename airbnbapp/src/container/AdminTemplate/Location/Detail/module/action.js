import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actFetchDetailLocation = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailLocationRequest);
    api
      .get(`locations/${id}`)
      .then((result) => {
        dispatch(actFetchDetailLocationSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailLocationFailed(error));
      });
  };
};
const actFetchDetailLocationRequest = () => {
  return {
    type: ActionType.GET_DETAIL_LOCATION_REQUEST,
  };
};
const actFetchDetailLocationSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_LOCATION_SUCCESS,
    payload: data,
  };
};
const actFetchDetailLocationFailed = (error) => {
  return {
    type: ActionType.GET_DETAIL_LOCATION_FAILED,
    payload: error,
  };
};
