import * as ActionType from "./constants";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const getDetailTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DETAIL_TICKET_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_DETAIL_TICKET_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_DETAIL_TICKET_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_TICKET_IMAGE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPLOAD_TICKET_IMAGE_SUCCESS: {
      state.data.image = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_TICKET_IMAGE_FAILED: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_TICKET_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPDATE_TICKET_SUCCESS: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_TICKET_FAILED: {
      state.loading = false;
      return { ...state };
    }
    
    case ActionType.GET_USERS_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_USERS_SUCCESS: {
      state.users = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_USERS_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }

    case ActionType.GET_ROOMS_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_ROOMS_SUCCESS: {
      state.rooms = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_ROOMS_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
