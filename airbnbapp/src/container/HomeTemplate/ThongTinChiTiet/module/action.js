import * as ActionType from "./constant"
import { apiAdmin } from "../../../../utils/apiUtilsAdmin"

export const actPutDetailUser = (id, data) => {
    return(dispatch, getState) => {
        if(!id) return
        dispatch(actPutDetailUserRequest)
        apiAdmin
        .put(`users/${id}`, data)
        .then((result) => {
            dispatch(actPutDetailUserSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actPutDetailUserFailed(error.message))
        })
    }
}
const actPutDetailUserRequest = () => {
    return{
        type: ActionType.PUT_DETAIL_USER_REQUEST,
    }
}
const actPutDetailUserSuccess = (result) => {
    return{
        type: ActionType.PUT_DETAIL_USER_SUCCESS,
        payload: result
    }
}
const actPutDetailUserFailed = (error) => {
    return{
        type: ActionType.PUT_DETAIL_USER_FAIL,
        payload: error
    }
}