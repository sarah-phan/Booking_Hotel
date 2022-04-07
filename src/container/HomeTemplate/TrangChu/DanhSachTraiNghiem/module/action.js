import * as ActionType from "./constants"
import { api } from "../../../../../utils/apiUtils"

export const actViTriPhanTrang = (limit, skip) => {
    return (dispatch) => {
        dispatch(actViTriPhanTrangRequest)
        api
        .get(`locations?skip=${skip}&limit=${limit}`)
        .then((result) => {
            dispatch(actViTriPhanTrangSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actViTriPhanTrangFailed(error))
        })
    }
}
const actViTriPhanTrangRequest = () => {
    return{
        type: ActionType.GET_VI_TRI_PHAN_TRANG_REQUEST
    }
}
const actViTriPhanTrangSuccess = (data) => {
    return{
        type:ActionType.GET_VI_TRI_PHAN_TRANG_SUCCESS,
        payload: data
    }
}
const actViTriPhanTrangFailed = (error) => {
    return{
        type: ActionType.GET_VI_TRI_PHAN_TRANG_FAILED,
        payload: error
    }
}