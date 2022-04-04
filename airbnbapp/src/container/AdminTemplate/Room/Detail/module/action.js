import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actUploadRoomImage = (roomId, imageData, callback) => {
  return (dispatch) => {
    dispatch(actUploadRoomImageRequest);
    api
      .post(`rooms/upload-images/${roomId}`, {
        room: imageData
      })
      .then((result) => {
        dispatch(actUploadRoomImageSuccess(result.data));
        callback && callback(result.data)
      })
      .catch((error) => {
        dispatch(actUploadRoomImageFailed(error));
        callback && callback(error)
      });
  };
};

const actUploadRoomImageRequest = () => {
  return {
    type: ActionType.UPLOAD_ROOM_IMAGE_REQUEST,
  };
};
const actUploadRoomImageSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_ROOM_IMAGE_SUCCESS,
    payload: data,
  };
};
const actUploadRoomImageFailed = (error) => {
  return {
    type: ActionType.UPLOAD_ROOM_IMAGE_FAILED,
    payload: error,
  };
};

export const actFetchDetailRoom = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailRoomRequest);
    api
      .get(`rooms/${id}`)
      .then((result) => {
        dispatch(actFetchDetailRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailRoomFailed(error));
      });
  };
};

const actFetchDetailRoomRequest = () => {
  return {
    type: ActionType.GET_DETAIL_ROOM_REQUEST,
  };
};
const actFetchDetailRoomSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_ROOM_SUCCESS,
    payload: data,
  };
};
const actFetchDetailRoomFailed = (error) => {
  return {
    type: ActionType.GET_DETAIL_ROOM_FAILED,
    payload: error,
  };
};

export const actUpdateRoom = (data, callback) => {
  return (dispatch) => {
    dispatch(actUpdateRoomRequest);
    (data._id ? api.put(`rooms/${data._id}`, data) : api.post(`rooms`, data))
      .then((result) => {
        callback && callback(result.data)
        dispatch(actUpdateRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUpdateRoomFailed(error));
      });
  };
};

const actUpdateRoomRequest = () => {
  return {
    type: ActionType.UPDATE_ROOM_REQUEST,
  };
};
const actUpdateRoomSuccess = (data) => {
  return {
    type: ActionType.UPDATE_ROOM_SUCCESS,
    payload: data,
  };
};
const actUpdateRoomFailed = (error) => {
  return {
    type: ActionType.UPDATE_ROOM_FAILED,
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

export const actDeleteRoom = (id, callback) => {
  return (dispatch) => {
    dispatch(actDeleteRoomRequest);
    api
      .delete(`rooms/${id}`)
      .then((result) => {
        callback && callback(result.data)
        dispatch(actDeleteRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDeleteRoomFailed(error));
      });
  };
};
const actDeleteRoomRequest = () => {
  return {
    type: ActionType.DELETE_ROOM_REQUEST,
  };
};
const actDeleteRoomSuccess = (data) => {
  return {
    type: ActionType.DELETE_ROOM_SUCCESS,
    payload: data,
  };
};
const actDeleteRoomFailed = (error) => {
  return {
    type: ActionType.DELETE_ROOM_FAILED,
    payload: error,
  };
};

export const actResetData = () => {
  return {
    type: ActionType.RESET_ROOM_DATA,
  };
};
