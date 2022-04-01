import * as ActionType from "./constants";
import { api } from "../../../../utils/apiUtils";

export const actFetchListTicket = () => {
  return (dispatch) => {
    dispatch(actFetchListTicketRequest);
    api
      .get("tickets")
      .then((result) => {
        dispatch(actFetchListTicketSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actFetchListTicketFailed(error));
      });
  };
};
const actFetchListTicketRequest = () => {
  return {
    type: ActionType.GET_LIST_TICKET_REQUEST,
  };
};
const actFetchListTicketSuccess = (data) => {
  return {
    type: ActionType.GET_LIST_TICKET_SUCCESS,
    payload: data,
  };
};
const actFetchListTicketFailed = (error) => {
  return {
    type: ActionType.GET_LIST_TICKET_FAILED,
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
