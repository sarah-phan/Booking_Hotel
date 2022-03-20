import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actGetDetailViTri = (id) => {
    return (dispatch) => {
        dispatch(actGetDetailViTriRequest)
        api
        .get(`locations/${id}`)
        .then((result) => {
            dispatch(actGetDetailViTriSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetDetailViTriFailed(error))
        })
    }
}
const actGetDetailViTriRequest = () => {
    return{
        type: ActionType.GET_DETAIL_VI_TRI_REQUEST,
    }
}
const actGetDetailViTriSuccess = (data) => {
    return{
        type: ActionType.GET_DETAIL_VI_TRI_SUCCESS,
        payload: data
    }
}
const actGetDetailViTriFailed = (error) => {
    return{
        type: ActionType.GET_DETAIL_VI_TRI_FAILED,
        payload: error
    }
}