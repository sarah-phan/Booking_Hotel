import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_AUTH_REQUEST:
        case ActionType.DANG_NHAP_REQUEST:
            {
                state.data = null;
                state.error = null;
                state.loading = true;
                return { ...state }
            }
        case ActionType.GET_AUTH_SUCCESS:
        case ActionType.DANG_NHAP_SUCCESS:
            {
                state.data = action.payload;
                state.error = null;
                state.loading = false;
                return { ...state }
            }
        case ActionType.GET_AUTH_FAILED:
        case ActionType.DANG_NHAP_FAILED:
            {
                state.data = null;
                state.error = action.payload;
                state.loading = false;
                return { ...state }
            }
        case ActionType.GET_CHI_TIET_USER_REQUEST: {
            state.data = null;
            state.error = null;
            state.loading = true;
            return { ...state }
        }
        case ActionType.GET_CHI_TIET_USER_SUCCESS: {
            if (!state.data) {
                state.data = {}
            }
            state.data.user = action.payload;
            state.error = null;
            state.loading = false;
            return { ...state }
        }
        case ActionType.GET_CHI_TIET_USER_FAILED: {
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return { ...state }
        }
        default:
            return { ...state }
    }
}