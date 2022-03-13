import * as ActionType from "./constants"
import { api } from "../../../../../utils/apiUtils"

export const actDangNhap = (user) => {
    return (dispatch) => {
        dispatch(actDangNhapRequest)
        api
        .post("auth/login", user)
        .then((result) => {
            var obj = {
                user: result.data.user,
                token: result.data.token
            }
            dispatch(actDangNhapSuccess(result.data.message))
            if(result.data.user.type === "ADMIN"){
                return Promise.reject({
                    message: "Bạn không có quyền truy cập"
                })
            }
            localStorage.setItem("UserAccount", JSON.stringify(obj))
        })
        .catch((error) => {
            dispatch(actDangNhapFailed(error.message))
        })
    }
}
const actDangNhapRequest = () => {
    return{
        type: ActionType.DANG_NHAP_REQUEST
    }
}
const actDangNhapSuccess = (data) => {
    return{
        type: ActionType.DANG_NHAP_SUCCESS,
        payload: data
    }
}
const actDangNhapFailed = (error) => {
    return{
        type: ActionType.DANG_NHAP_FAILED,
        payload: error
    }
}