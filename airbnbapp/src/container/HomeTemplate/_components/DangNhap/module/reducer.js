import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const dangNhapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DANG_NHAP_REQUEST:{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.DANG_NHAP_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.DANG_NHAP_FAILED:{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state}
    }
}