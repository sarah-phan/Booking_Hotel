import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actDangKy = (user) => {
    return (dispatch) => {
        dispatch(actDangKyRequest)
        api
        .post("auth/register", user)
        .then((result) => {
            dispatch(actDangKySuccess(result.data))
        })
        .catch((error) => {
            dispatch(actDangKyFailed(error))
        })
    }
}
const actDangKyRequest = () => {
    return{
        type: ActionType.DANG_KY_REQUEST
    }
}
const actDangKySuccess = (data) => {
    return{
        type: ActionType.DANG_KY_SUCCESS,
        payload: data
    }
}
const actDangKyFailed = (error) => {
    return{
        type: ActionType.DANG_KY_FAILED,
        payload: error
    }
}