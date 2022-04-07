import * as ActionType from "./constant"

const initialState = {
    dataPaginate: null,
    errorPaginate: null,
    loading: false,
}

export const getListRoomPaginateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_ROOM_PAGINATE_REQUEST:{
            state.dataPaginate = null;
            state.errorPaginate = null;
            state.loading = true;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_PAGINATE_SUCCESS:{
            state.dataPaginate = action.payload;
            state.errorPaginate = null;
            state.loading = false;
            return {...state}
        }
        case ActionType.GET_LIST_ROOM_PAGINATE_FAILED:{
            state.dataPaginate = null;
            state.errorPaginate = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state}
    }
}
