import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actGetListBookingHistory = (id) => {
    return (dispatch) => {
        dispatch(actGetListBookingHistoryRequest)
        api
        .get(`tickets/by-user?userId=${id}`)
        .then((result) => {
            dispatch(actGetListBookingHistorySuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetListBookingHistoryFailed(error.message))
        })
    }
}
const actGetListBookingHistoryRequest = () => {
    return{
        type: ActionType.GET_LIST_BOOKING_HISTORY_REQUEST
    }
}
const actGetListBookingHistorySuccess = (data) => {
    return{
        type: ActionType.GET_LIST_BOOKING_HISTORY_SUCCESS,
        payload: data
    }
}
const actGetListBookingHistoryFailed = (error) => {
    return{
        type: ActionType.GET_LIST_BOOKING_HISTORY_FAILED,
        payload: error
    }
}