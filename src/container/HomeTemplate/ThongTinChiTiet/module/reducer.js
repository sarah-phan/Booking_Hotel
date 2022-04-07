import * as ActionType from "./constant"

const initialValues = {
    data: null,
    error: null,
}

export const putUserDetailReducer = (state = initialValues, action) => {
    switch (action.type) {
        case(ActionType.PUT_DETAIL_USER_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case(ActionType.PUT_DETAIL_USER_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case(ActionType.PUT_DETAIL_USER_FAIL):{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state};
    }
}