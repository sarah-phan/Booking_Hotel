import * as ActionType from "./constants"

const initialValues = {
    data: null,
    error: null,
    loading: false,
}

export const getListBookingHistoryReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_BOOKING_HISTORY_REQUEST:{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.GET_LIST_BOOKING_HISTORY_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.GET_LIST_BOOKING_HISTORY_FAILED:{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state};
    }
}