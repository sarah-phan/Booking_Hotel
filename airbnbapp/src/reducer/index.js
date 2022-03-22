import { combineReducers } from "redux";
import { getViTriReducer } from "../container/HomeTemplate/TrangChu/module/reducer";
import { getViTriPhanTrangReducer } from "../container/HomeTemplate/TrangChu/DanhSachTraiNghiem/module/reducer";
import { dangKyReducer } from "../container/HomeTemplate/_components/DangKy/module/reducer";
import { dangNhapReducer } from "../container/HomeTemplate/_components/DangNhap/module/reducer";
import { getChiTietUserReducer } from "./moduleUserDetail/reducer";
import { getValueSearchReducer } from "./moduleValueSearch/reducer";
import { getDetailViTriReducer } from "../container/HomeTemplate/DanhSachPhongO/module/reducer";
import { getListRoomPaginateReducer } from "../container/HomeTemplate/DanhSachPhongO/ListRoom/module/reducer";
import { getAdvancedSearchValueReducer } from "../container/HomeTemplate/DanhSachPhongO/AdvancedSearch/module/reducer";
import { getDetailRoomReducer } from "../container/HomeTemplate/ChiTietPhongO/module/reducer";
import { getListCommentReducer } from "../container/HomeTemplate/ChiTietPhongO/BinhLuanPhongO/module/reducer";

export const rootReducer = combineReducers({
    getViTriReducer,
    getViTriPhanTrangReducer,
    dangKyReducer,
    dangNhapReducer,
    getChiTietUserReducer,
    getValueSearchReducer,
    getDetailViTriReducer,
    getListRoomPaginateReducer,
    getAdvancedSearchValueReducer,
    getDetailRoomReducer,
    getListCommentReducer
})