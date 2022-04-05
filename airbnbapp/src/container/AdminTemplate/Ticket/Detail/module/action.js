import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiUtils";

export const actUploadTicketImage = (ticketId, imageData, callback) => {
  return (dispatch) => {
    dispatch(actUploadTicketImageRequest);
    api
      .post(`tickets/upload-images/${ticketId}`, {
        ticket: imageData
      })
      .then((result) => {
        dispatch(actUploadTicketImageSuccess(result.data));
        callback(result.data)
      })
      .catch((error) => {
        dispatch(actUploadTicketImageFailed(error));
        callback(error)
      });
  };
};

const actUploadTicketImageRequest = () => {
  return {
    type: ActionType.UPLOAD_TICKET_IMAGE_REQUEST,
  };
};
const actUploadTicketImageSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_TICKET_IMAGE_SUCCESS,
    payload: data,
  };
};
const actUploadTicketImageFailed = (error) => {
  return {
    type: ActionType.UPLOAD_TICKET_IMAGE_FAILED,
    payload: error,
  };
};

export const actFetchDetailTicket = (id) => {
  return (dispatch) => {
    dispatch(actFetchDetailTicketRequest);
    api
      .get(`tickets/${id}`)
      .then((result) => {
        dispatch(actFetchDetailTicketSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailTicketFailed(error));
      });
  };
};

const actFetchDetailTicketRequest = () => {
  return {
    type: ActionType.GET_DETAIL_TICKET_REQUEST,
  };
};
const actFetchDetailTicketSuccess = (data) => {
  return {
    type: ActionType.GET_DETAIL_TICKET_SUCCESS,
    payload: data,
  };
};
const actFetchDetailTicketFailed = (error) => {
  return {
    type: ActionType.GET_DETAIL_TICKET_FAILED,
    payload: error,
  };
};

export const actUpdateTicket = (data, callback) => {
  return (dispatch) => {
    dispatch(actUpdateTicketRequest);
    (data._id ? api.put(`tickets/${data._id}`, data) : api.post(`tickets`, data))
      .then((result) => {
        callback(result.data)
        dispatch(actUpdateTicketSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actUpdateTicketFailed(error));
      });
  };
};

const actUpdateTicketRequest = () => {
  return {
    type: ActionType.UPDATE_TICKET_REQUEST,
  };
};
const actUpdateTicketSuccess = (data) => {
  return {
    type: ActionType.UPDATE_TICKET_SUCCESS,
    payload: data,
  };
};
const actUpdateTicketFailed = (error) => {
  return {
    type: ActionType.UPDATE_TICKET_FAILED,
    payload: error,
  };
};

export const actGetUsers = () => {
  return (dispatch) => {
    dispatch(actGetUsersRequest);
    api
      .get("users")
      .then((result) => {
        dispatch(actGetUsersSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetUsersFailed(error));
      });
  };
};
const actGetUsersRequest = () => {
  return {
    type: ActionType.GET_USERS_REQUEST,
  };
};
const actGetUsersSuccess = (data) => {
  return {
    type: ActionType.GET_USERS_SUCCESS,
    payload: data,
  };
};
const actGetUsersFailed = (error) => {
  return {
    type: ActionType.GET_USERS_FAILED,
    payload: error,
  };
};

export const actGetRooms = () => {
  return (dispatch) => {
    dispatch(actGetRoomsRequest);
    api
      .get("rooms")
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

export const actDeleteTicket = (id, callback) => {
  return (dispatch) => {
    dispatch(actDeleteTicketRequest);
    api
      .delete(`tickets/${id}`)
      .then((result) => {
        callback(result.data)
        dispatch(actDeleteTicketSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDeleteTicketFailed(error));
      });
  };
};
const actDeleteTicketRequest = () => {
  return {
    type: ActionType.DELETE_TICKET_REQUEST,
  };
};
const actDeleteTicketSuccess = (data) => {
  return {
    type: ActionType.DELETE_TICKET_SUCCESS,
    payload: data,
  };
};
const actDeleteTicketFailed = (error) => {
  return {
    type: ActionType.DELETE_TICKET_FAILED,
    payload: error,
  };
};

export const actResetData = () => {
  return {
    type: ActionType.RESET_TICKET_DATA,
  };
};