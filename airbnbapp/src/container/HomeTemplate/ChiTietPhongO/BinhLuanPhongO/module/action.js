import * as ActionType from "./constant"
import { api } from "../../../../../utils/apiUtils"

export const actGetListRoomComment = (id) => {
    return (dispatch) => {
        dispatch(actGetListRoomCommentRequest)
        api
        .get(`reviews/byRoom?roomId=${id}`)
        .then((result) => {
            dispatch(actGetListRoomCommentSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetListRoomCommentFailed(error))
        })
    }
}

const actGetListRoomCommentRequest = () => {
    return{
        type: ActionType.GET_LIST_COMMENT_REQUEST,
    }
}
const actGetListRoomCommentSuccess = (data) => {
    return{
        type: ActionType.GET_LIST_COMMENT_SUCCESS,
        payload: data
    }
}
const actGetListRoomCommentFailed = (error) => {
    return{
        type: ActionType.GET_LIST_COMMENT_FAILED,
        payload: error
    }
}