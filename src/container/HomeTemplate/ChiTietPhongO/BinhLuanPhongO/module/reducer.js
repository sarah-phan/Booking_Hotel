import * as ActionType from "./constant"

const initialState = {
    data: null,
    error: null,
}
export const getListCommentReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.GET_LIST_COMMENT_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case(ActionType.GET_LIST_COMMENT_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case(ActionType.GET_LIST_COMMENT_FAILED):{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}