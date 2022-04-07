import * as ActionType from "./constants"
import { api } from "../../../../utils/apiUtils"

export const actFetchViTri = () => {
    return (dispatch) => {
        dispatch(actViTriRequest)
        api
        .get("locations")
        .then((result) => {
            dispatch(actViTriSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actViTriFailed(error))
        })
    }
} 
const actViTriRequest = () => {
    return{
        type: ActionType.GET_VI_TRI_REQUEST
    }
}
const actViTriSuccess = (data) => {
    return{
        type: ActionType.GET_VI_TRI_SUCCESS,
        payload: data
    }
}
const actViTriFailed = (error) => {
    return{
        type: ActionType.GET_VI_TRI_FAILED,
        payload: error
    }
}