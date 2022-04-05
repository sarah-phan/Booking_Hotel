import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actUploadUserAdminImage = (userAdminId, imageData, callback) => {
  return (dispatch) => {
    dispatch(actUploadUserAdminImageRequest);
    api
      .post(`users/upload-images/${userAdminId}`, {
        userAdmin: imageData
      })
      .then((result) => {
        dispatch(actUploadUserAdminImageSuccess(result.data));
        callback(result.data)
      })
      .catch((error) => {
        dispatch(actUploadUserAdminImageFailed(error));
        callback(error)
      });
  };
};

const actUploadUserAdminImageRequest = () => {
  return {
    type: ActionType.UPLOAD_USER_ADMIN_IMAGE_REQUEST,
  };
};
const actUploadUserAdminImageSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_USER_ADMIN_IMAGE_SUCCESS,
    payload: data,
  };
};
const actUploadUserAdminImageFailed = (error) => {
  return {
    type: ActionType.UPLOAD_USER_ADMIN_IMAGE_FAILED,
    payload: error,
  };
};

export const actFetchDetailUserAdmin = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailUserAdminRequest);
    api
      .get(`users/${id}`)
      .then((result) => {
        dispatch(actFetchDetailUserAdminSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailUserAdminFailed(error));
      });
  };
};

const actFetchDetailUserAdminRequest = () => {
  return {
    type: ActionType.GET_DETAIL_USER_ADMIN_REQUEST,
  };
};
const actFetchDetailUserAdminSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_USER_ADMIN_SUCCESS,
    payload: data,
  };
};
const actFetchDetailUserAdminFailed = (error) => {
  return {
    type: ActionType.GET_DETAIL_USER_ADMIN_FAILED,
    payload: error,
  };
};

export const actUpdateUserAdmin = (data, callback) => {
  return (dispatch) => {
    dispatch(actUpdateUserAdminRequest);
    (data._id ? api.put(`users/${data._id}`, data) : api.post(`users`, data))
      .then((result) => {
        callback(result.data)
        dispatch(actUpdateUserAdminSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUpdateUserAdminFailed(error));
      });
  };
};

const actUpdateUserAdminRequest = () => {
  return {
    type: ActionType.UPDATE_USER_ADMIN_REQUEST,
  };
};
const actUpdateUserAdminSuccess = (data) => {
  return {
    type: ActionType.UPDATE_USER_ADMIN_SUCCESS,
    payload: data,
  };
};
const actUpdateUserAdminFailed = (error) => {
  return {
    type: ActionType.UPDATE_USER_ADMIN_FAILED,
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

export const actDeleteUser = (id, callback) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest);
    api
      .delete(`users/${id}`)
      .then((result) => {
        callback(result.data)
        dispatch(actDeleteUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDeleteUserFailed(error));
      });
  };
};
const actDeleteUserRequest = () => {
  return {
    type: ActionType.DELETE_USER_REQUEST,
  };
};
const actDeleteUserSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};
const actDeleteUserFailed = (error) => {
  return {
    type: ActionType.DELETE_USER_FAILED,
    payload: error,
  };
};

export const actResetData = () => {
  return {
    type: ActionType.RESET_USER_DATA,
  };
};
