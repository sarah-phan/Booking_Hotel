import { combineReducers } from "redux";
import { getViTriReducer } from "../container/HomeTemplate/TrangChu/module/reducer";
import { getViTriPhanTrangReducer } from "../container/HomeTemplate/TrangChu/DanhSachTraiNghiem/module/reducer";
import { dangKyReducer } from "../container/HomeTemplate/DangKy/module/reducer";
import { dangNhapReducer } from "../container/HomeTemplate/TrangChu/DangNhap/module/reducer";
import { getChiTietUserReducer } from "./moduleUserDetail/reducer";

// ADMIN PAGE
import { getUserReducer } from "../container/AdminTemplate/UserAdmin/module/reducer";
export const rootReducer = combineReducers({
  getViTriReducer,
  getViTriPhanTrangReducer,
  dangKyReducer,
  dangNhapReducer,
  getChiTietUserReducer,

  //admin page

  getUserReducer,
});
