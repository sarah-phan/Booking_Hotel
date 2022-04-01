import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actUploadLocationImage = (locationId, imageData, callback) => {
  return (dispatch) => {
    dispatch(actUploadLocationImageRequest);
    api
      .post(`locations/upload-images/${locationId}`, {
        location: imageData
      })
      .then((result) => {
        dispatch(actUploadLocationImageSuccess(result.data));
        callback && callback(result.data)
      })
      .catch((error) => {
        dispatch(actUploadLocationImageFailed(error));
        callback && callback(error)
      });
  };
};

const actUploadLocationImageRequest = () => {
  return {
    type: ActionType.UPLOAD_LOCATION_IMAGE_REQUEST,
  };
};
const actUploadLocationImageSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_LOCATION_IMAGE_SUCCESS,
    payload: data,
  };
};
const actUploadLocationImageFailed = (error) => {
  return {
    type: ActionType.UPLOAD_LOCATION_IMAGE_FAILED,
    payload: error,
  };
};

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

export const actUpdateLocation = (data, callback) => {
  return (dispatch) => {
    dispatch(actUpdateLocationRequest);
    (data._id ? api.put(`locations/${data._id}`, data) : api.post(`locations`, data))
      .then((result) => {
        callback && callback(result.data)
        dispatch(actUpdateLocationSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUpdateLocationFailed(error));
      });
  };
};

const actUpdateLocationRequest = () => {
  return {
    type: ActionType.UPDATE_LOCATION_REQUEST,
  };
};
const actUpdateLocationSuccess = (data) => {
  return {
    type: ActionType.UPDATE_LOCATION_SUCCESS,
    payload: data,
  };
};
const actUpdateLocationFailed = (error) => {
  return {
    type: ActionType.UPDATE_LOCATION_FAILED,
    payload: error,
  };
};