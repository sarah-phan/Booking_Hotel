import * as ActionType from "./constants"
import { api } from "../../utils/apiUtils"

export const getAuth = (token) => {
    return (dispatch) => {
        const idUser = localStorage.getItem('user-id')
        if(!idUser) dispatch(getAuthFailed()) 
        dispatch(getAuthRequest)
        api
        .get(`users/${idUser}`)
        .then((result) => {
            dispatch(getAuthSuccess({
                user: result.data,
                token
            }))
            localStorage.setItem("user-id", result.data?._id)
            localStorage.setItem("access_token", token)
        })
        .catch((error) => {
            dispatch(getAuthFailed(error))
            localStorage.removeItem("access_token")
            localStorage.removeItem("user-id")
        })
    }
}
const getAuthRequest = () => {
    return {
        type: ActionType.GET_AUTH_REQUEST,
    }
}
const getAuthSuccess = (data) => {
    return {
        type: ActionType.GET_AUTH_SUCCESS,
        payload: data
    }
}
const getAuthFailed = (error) => {
    return{
        type: ActionType.GET_AUTH_FAILED,
        payload: error
    }
}

export const actDangNhap = (user) => {
    return (dispatch) => {
        dispatch(actDangNhapRequest)
        api
        .post("auth/login", user)
        .then((result) => {
            dispatch(actDangNhapSuccess(result.data))
            localStorage.setItem("user-id", result.data?.user?._id)
            localStorage.setItem("access_token", result.data?.token)
            if (result.data?.user?.type == "ADMIN") {
                window.location.replace('/admin')
            }
        })
        .catch((error) => {
            dispatch(actDangNhapFailed(error.message))
        })
    }
}
const actDangNhapRequest = () => {
    return{
        type: ActionType.DANG_NHAP_REQUEST
    }
}
const actDangNhapSuccess = (data) => {
    return{
        type: ActionType.DANG_NHAP_SUCCESS,
        payload: data
    }
}
const actDangNhapFailed = (error) => {
    return{
        type: ActionType.DANG_NHAP_FAILED,
        payload: error
    }
}

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
    return {
        type: ActionType.GET_CHI_TIET_USER_REQUEST,
    }
}
const actGetChiTietSuccess = (data) => {
    return {
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