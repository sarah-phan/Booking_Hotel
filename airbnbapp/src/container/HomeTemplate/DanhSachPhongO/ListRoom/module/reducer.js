import * as ActionType from "./constant"

const initialState = {
    dataPaginate: null,
    errorPaginate: null,

    data: null,
    error: null
}

export const getListRoomPaginateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_ROOM_PAGINATE_REQUEST:{
            state.dataPaginate = null;
            state.errorPaginate = null;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_PAGINATE_SUCCESS:{
            state.dataPaginate = action.payload;
            state.errorPaginate = null;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_PAGINATE_FAILED:{
            state.dataPaginate = null;
            state.errorPaginate = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}

export const getListRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_ROOM_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_FAILED:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}