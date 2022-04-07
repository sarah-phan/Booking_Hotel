import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actGetDetailRoom = (id) => {
    return (dispatch) => {
        dispatch(actGetDetailRoomRequest)
        api
        .get(`rooms/${id}`)
        .then((result) => {
            dispatch(actGetDetailRoomSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetDetailRoomFailed(error))
        })
    }
}

const actGetDetailRoomRequest = () => {
    return{
        type: ActionType.GET_DETAIL_ROOM_REQUEST,
    }
}
const actGetDetailRoomSuccess = (data) => {
    return{
        type: ActionType.GET_DETAIL_ROOM_SUCCESS,
        payload: data
    }
}
const actGetDetailRoomFailed = (error) => {
    return{
        type: ActionType.GET_DETAIL_ROOM_FAILED,
        payload: error
    }
}