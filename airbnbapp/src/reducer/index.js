import { combineReducers } from "redux";
import { getViTriReducer } from "../container/HomeTemplate/TrangChu/module/reducer";
import { getViTriPhanTrangReducer } from "../container/HomeTemplate/TrangChu/DanhSachTraiNghiem/module/reducer";

export const rootReducer = combineReducers({
    getViTriReducer,
    getViTriPhanTrangReducer,
})