import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListRoom = () => {
  return (dispatch) => {
    dispatch(actFetchListRoomRequest);
    api
      .get("rooms")
      .then((result) => {
        dispatch(actFetchListRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListRoomFailed(error));
      });
  };
};
const actFetchListRoomRequest = () => {
  return {
    type: ActionType.GET_LIST_ROOM_REQUEST,
  };
};
const actFetchListRoomSuccess = (data) => {
  return {
    type: ActionType.GET_LIST_ROOM_SUCCESS,
    payload: data,
  };
};
const actFetchListRoomFailed = (error) => {
  return {
    type: ActionType.GET_LIST_ROOM_FAILED,
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
