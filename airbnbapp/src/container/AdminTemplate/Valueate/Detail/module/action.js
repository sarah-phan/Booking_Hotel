import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actUploadValueateImage = (valueateId, imageData, callback) => {
  return (dispatch) => {
    dispatch(actUploadValueateImageRequest);
    api
      .post(`valueates/upload-images/${valueateId}`, {
        valueate: imageData
      })
      .then((result) => {
        dispatch(actUploadValueateImageSuccess(result.data));
        callback && callback(result.data)
      })
      .catch((error) => {
        dispatch(actUploadValueateImageFailed(error));
        callback && callback(error)
      });
  };
};

const actUploadValueateImageRequest = () => {
  return {
    type: ActionType.UPLOAD_VALUEATE_IMAGE_REQUEST,
  };
};
const actUploadValueateImageSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_VALUEATE_IMAGE_SUCCESS,
    payload: data,
  };
};
const actUploadValueateImageFailed = (error) => {
  return {
    type: ActionType.UPLOAD_VALUEATE_IMAGE_FAILED,
    payload: error,
  };
};

export const actFetchDetailValueate = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailValueateRequest);
    api
      .get(`reviews/${id}`)
      .then((result) => {
        dispatch(actFetchDetailValueateSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailValueateFailed(error));
      });
  };
};

const actFetchDetailValueateRequest = () => {
  return {
    type: ActionType.GET_DETAIL_VALUEATE_REQUEST,
  };
};
const actFetchDetailValueateSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_VALUEATE_SUCCESS,
    payload: data,
  };
};
const actFetchDetailValueateFailed = (error) => {
  return {
    type: ActionType.GET_DETAIL_VALUEATE_FAILED,
    payload: error,
  };
};

export const actUpdateValueate = (data, callback) => {
  return (dispatch) => {
    dispatch(actUpdateValueateRequest);
    (data._id ? api.put(`reviews/${data._id}`, data) : api.post(`valueates`, data))
      .then((result) => {
        callback && callback(result.data)
        dispatch(actUpdateValueateSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUpdateValueateFailed(error));
      });
  };
};

const actUpdateValueateRequest = () => {
  return {
    type: ActionType.UPDATE_VALUEATE_REQUEST,
  };
};
const actUpdateValueateSuccess = (data) => {
  return {
    type: ActionType.UPDATE_VALUEATE_SUCCESS,
    payload: data,
  };
};
const actUpdateValueateFailed = (error) => {
  return {
    type: ActionType.UPDATE_VALUEATE_FAILED,
    payload: error,
  };
};

export const actDeleteValuate = (id) => {
  return (dispatch) => {
    dispatch(actDeleteValuateRequest);
    api
      .delete(`reviews/${id}`)
      .then((result) => {
        callback && callback(result.data)
        dispatch(actDeleteValuateSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDeleteValuateFailed(error));
      });
  };
};
const actDeleteValuateRequest = () => {
  return {
    type: ActionType.DELETE_VALUEATE_REQUEST,
  };
};
const actDeleteValuateSuccess = (data) => {
  return {
    type: ActionType.DELETE_VALUEATE_SUCCESS,
    payload: data,
  };
};
const actDeleteValuateFailed = (error) => {
  return {
    type: ActionType.DELETE_VALUEATE_FAILED,
    payload: error,
  };
};

export const actResetData = () => {
  return {
    type: ActionType.RESET_VALUATE_DATA,
  };
};