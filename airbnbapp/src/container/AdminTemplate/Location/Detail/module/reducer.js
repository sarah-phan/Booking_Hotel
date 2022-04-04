import * as ActionType from "./constants";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const getDetailLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DETAIL_LOCATION_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_DETAIL_LOCATION_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_DETAIL_LOCATION_FAILED: {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_LOCATION_IMAGE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPLOAD_LOCATION_IMAGE_SUCCESS: {
      state.data.image = action.payload;
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPLOAD_LOCATION_IMAGE_FAILED: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_LOCATION_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case ActionType.UPDATE_LOCATION_SUCCESS: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.UPDATE_LOCATION_FAILED: {
      state.loading = false;
      return { ...state };
    }
    case ActionType.RESET_LOCATION_DATA: {
      state.data = null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
