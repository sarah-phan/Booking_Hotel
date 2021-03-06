import * as ActionType from "./constant"
import { api } from "../../../../../utils/apiUtils"

export const actGetListRoomPaginate = (skip, limit, id) => {
    return (dispatch) => {
        dispatch(actGetListRoomPaginateRequest)
        api
        .get(`rooms?skip=${skip}&limit=${limit}&locationId=${id}`)
        .then((result) => {
            dispatch(actGetListRoomPaginateSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetListRoomPaginateFailed(error))
        })
    }
}

const actGetListRoomPaginateRequest = () => {
    return{
        type: ActionType.GET_LIST_ROOM_PAGINATE_REQUEST,
    }
}
const actGetListRoomPaginateSuccess = (data) => {
    return{
        type: ActionType.GET_LIST_ROOM_PAGINATE_SUCCESS,
        payload: data,
    }
}
const actGetListRoomPaginateFailed = (error) => {
    return{
        type: ActionType.GET_LIST_ROOM_PAGINATE_FAILED,
        payload: error
    }
}