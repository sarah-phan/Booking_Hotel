import * as ActionType from "./constants";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const getListValueateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_VALUEATE_REQUEST: {
      state.data = null;
      state.error = null;
      state.loading = true;
      return { ...state };
    }
    case ActionType.GET_LIST_VALUEATE_SUCCESS: {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
      return { ...state };
    }
    case ActionType.GET_LIST_VALUEATE_FAILED: {
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
