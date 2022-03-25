import * as ActionType from "./constants"

const initialValues = {
    data: null,
    error: null,
}

export const createBookingReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ActionType.CREATE_BOOKING_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.CREATE_BOOKING_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.CREATE_BOOKING_FAILED:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}