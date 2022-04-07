import * as ActionType from "./constants"
import { apiAdmin } from "../../../../utils/apiUtilsAdmin"

export const actCreateBooking = (data) => {
    return (dispatch) => {
        dispatch(actCreateBookingRequest)
        apiAdmin
        .post("tickets", data)
        .then((result) => {
            dispatch(actCreateBookingSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actCreateBookingFailed(error.message))
        })
    }
}
const actCreateBookingRequest = () => {
    return{
        type: ActionType.CREATE_BOOKING_REQUEST
    }
}
const actCreateBookingSuccess = (result) => {
    return{
        type: ActionType.CREATE_BOOKING_SUCCESS,
        payload: result
    }
}
const actCreateBookingFailed = (error) => {
    return{
        type: ActionType.CREATE_BOOKING_FAILED,
        payload: error
    }
}