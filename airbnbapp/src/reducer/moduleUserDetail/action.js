import * as ActionType from "./constants"
import { api } from "../../utils/apiUtils"

export const actGetChiTiet = (idUser) => {
    return (dispatch) => {
        dispatch(actGetChiTietRequest)
        api
        .get(`users/${idUser}`)
        .then((result) => {
            dispatch(actGetChiTietSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetChiTietFailed(error))
        })
    }
}
const actGetChiTietRequest = () => {
    return{
        type: ActionType.GET_CHI_TIET_USER_REQUEST,
    }
}
const actGetChiTietSuccess = (data) => {
    return{
        type: ActionType.GET_CHI_TIET_USER_SUCCESS,
        payload: data
    }
}
const actGetChiTietFailed = (error) => {
    return{
        type: ActionType.GET_CHI_TIET_USER_FAILED,
        payload: error
    }
}