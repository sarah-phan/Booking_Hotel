import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actGetHistoryDetail = (id) => {
    return (dispatch) => {
        dispatch(actGetHistoryDetailRequest)
        api
        .get(`tickets/${id}`)
        .then((result) => {
            dispatch(actGetHistoryDetailSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetHistoryDetailFailed(error.message))
        })
    }
}
const actGetHistoryDetailRequest = () => {
    return {
        type: ActionType.GET_DETAIL_HISTORY_REQUEST
    }
}
const actGetHistoryDetailSuccess = (data) => {
    return{
        type: ActionType.GET_DETAIL_HISTORY_SUCCESS,
        payload: data
    }
}
const actGetHistoryDetailFailed = (error) => {
    return{
        type:ActionType.GET_DETAIL_HISTORY_FAILED,
        payload: error,
    }
}