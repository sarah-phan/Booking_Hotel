import * as ActionType from "./constants";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const getDetailUserAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DETAIL_USER_ADMIN_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_DETAIL_USER_ADMIN_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_DETAIL_USER_ADMIN_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_USER_ADMIN_IMAGE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPLOAD_USER_ADMIN_IMAGE_SUCCESS: {
      state.data.image = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_USER_ADMIN_IMAGE_FAILED: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_USER_ADMIN_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPDATE_USER_ADMIN_SUCCESS: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_USER_ADMIN_FAILED: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_LOCATIONS_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_LOCATIONS_SUCCESS: {
      state.locations = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_LOCATIONS_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.RESET_USER_DATA: {
      state.data = null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
