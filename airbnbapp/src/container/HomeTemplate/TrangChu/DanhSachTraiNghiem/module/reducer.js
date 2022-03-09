import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
    loading: false
}

export const getViTriPhanTrangReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.GET_VI_TRI_PHAN_TRANG_REQUEST):{
            state.data = null;
            state.error = null;
            state.loading = true;
            return {...state}
        }
        case(ActionType.GET_VI_TRI_PHAN_TRANG_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            state.loading = false;
            return {...state}
        }
        case(ActionType.GET_VI_TRI_PHAN_TRANG_FAILED):{
            state.data = null;
            state.error = action.payload;
            state.loading = false;
            return {...state}
        }
        default:
            return {...state}
    }
}