import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
}
export const getDetailViTriReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_DETAIL_VI_TRI_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.GET_DETAIL_VI_TRI_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }    
        case ActionType.GET_DETAIL_VI_TRI_FAILED:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}