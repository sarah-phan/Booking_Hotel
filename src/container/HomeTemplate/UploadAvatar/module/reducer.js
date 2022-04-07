import * as ActionType from "./constant"

const initialValues = {
    data: null,
    error: null
}

export const uploadAvatarReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ActionType.UPLOAD_AVATAR_REQUEST:{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case ActionType.UPLOAD_AVATAR_SUCCESS:{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case ActionType.UPLOAD_AVATAR_REQUEST:{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}