import * as ActionType from "./constant"
import { api } from "../../../../utils/apiUtils"

export const actUploadAvatar = (file) => {
    console.log(file)
    return (dispatch) => {
        dispatch(actUploadAvatarRequest)
        api
        .post("users/upload-avatar", file)
        .then((result) => {
            dispatch(actUploadAvatarSuccess(result.data))
            var obj = {
                user: result.data,
                token: JSON.parse(localStorage.getItem("UserAccount")).token
            }
            localStorage.setItem("UserAccount", JSON.stringify(obj))
        })
        .catch((error) => {
            dispatch(actUploadAvatarFailed(error.message))
        })
    }
}
const actUploadAvatarRequest = () => {
    return{
        type: ActionType.UPLOAD_AVATAR_REQUEST
    }
}
const actUploadAvatarSuccess = (result) => {
    return{
        type: ActionType.UPLOAD_AVATAR_SUCCESS,
        payload: result
    }
}
const actUploadAvatarFailed = (error) => {
    return{
        type: ActionType.UPLOAD_AVATAR_FAILED,
        payload: error
    }
}