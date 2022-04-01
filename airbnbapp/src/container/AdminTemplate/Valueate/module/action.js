import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListValueate = (roomId) => {
  return (dispatch) => {
    dispatch(actFetchListValueateRequest);
    api
      .get(`reviews/byRoom?roomId=${roomId}`)
      .then((result) => {
        dispatch(actFetchListValueateSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListValueateFailed(error));
      });
  };
};
const actFetchListValueateRequest = () => {
  return {
    type: ActionType.GET_LIST_VALUEATE_REQUEST,
  };
};
const actFetchListValueateSuccess = (data) => {
  return {
    type: ActionType.GET_LIST_VALUEATE_SUCCESS,
    payload: data,
  };
};
const actFetchListValueateFailed = (error) => {
  return {
    type: ActionType.GET_LIST_VALUEATE_FAILED,
    payload: error,
  };
};

export const actGetRooms = (roomId) => {
  return (dispatch) => {
    dispatch(actGetRoomsRequest);
    api
      .get(`rooms`)
      .then((result) => {
        dispatch(actGetRoomsSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetRoomsFailed(error));
      });
  };
};
const actGetRoomsRequest = () => {
  return {
    type: ActionType.GET_ROOMS_REQUEST,
  };
};
const actGetRoomsSuccess = (data) => {
  return {
    type: ActionType.GET_ROOMS_SUCCESS,
    payload: data,
  };
};
const actGetRoomsFailed = (error) => {
  return {
    type: ActionType.GET_ROOMS_FAILED,
    payload: error,
  };
};
