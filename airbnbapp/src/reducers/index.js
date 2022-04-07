import { combineReducers } from "redux";

//HOME PAGE
import { getViTriReducer } from "../container/HomeTemplate/TrangChu/module/reducer";
import { getViTriPhanTrangReducer } from "../container/HomeTemplate/TrangChu/DanhSachTraiNghiem/module/reducer";
import { dangKyReducer } from "../container/HomeTemplate/_components/DangKy/module/reducer";
import { authReducer } from "./moduleAuth/reducer";
import { getValueSearchReducer } from "./moduleValueSearch/reducer";
import { getDetailViTriReducer } from "../container/HomeTemplate/DanhSachPhongO/module/reducer";
import { getListRoomPaginateReducer } from "../container/HomeTemplate/DanhSachPhongO/ListRoom/module/reducer";
import { getAdvancedSearchValueReducer } from "../container/HomeTemplate/DanhSachPhongO/AdvancedSearch/module/reducer";
import { getDetailRoomReducer } from "../container/HomeTemplate/ChiTietPhongO/module/reducer";
import { getListCommentReducer } from "../container/HomeTemplate/ChiTietPhongO/BinhLuanPhongO/module/reducer";
import { putUserDetailReducer } from "../container/HomeTemplate/ThongTinChiTiet/module/reducer";
import { uploadAvatarReducer } from "../container/HomeTemplate/UploadAvatar/module/reducer";
import { createBookingReducer } from "../container/HomeTemplate/XacNhan/module/reducer";
import { getListBookingHistoryReducer } from "../container/HomeTemplate/LichSu/module/reducer";
import { getDetailHistoryReducer } from "../container/HomeTemplate/ChiTietLichSu/module/reducer";

// ADMIN PAGE
import { getListUserAdminReducer } from "../container/AdminTemplate/UserAdmin/module/reducer";
import { getDetailUserAdminReducer } from "../container/AdminTemplate/UserAdmin/Detail/module/reducer";
import { getListLocationReducer } from "../container/AdminTemplate/Location/module/reducer";
import { getDetailLocationReducer } from "../container/AdminTemplate/Location/Detail/module/reducer";
import { getListRoomReducer } from "../container/AdminTemplate/Room/module/reducer";
import { getAdminDetailRoomReducer } from "../container/AdminTemplate/Room/Detail/module/reducer";
import { getListTicketReducer } from "../container/AdminTemplate/Ticket/module/reducer";
import { getDetailTicketReducer } from "../container/AdminTemplate/Ticket/Detail/module/reducer";
import { getListValueateReducer } from "../container/AdminTemplate/Valueate/module/reducer";
import { getDetailValueateReducer } from "../container/AdminTemplate/Valueate/Detail/module/reducer";


export const rootReducer = combineReducers({
  getViTriReducer,
  getViTriPhanTrangReducer,
  dangKyReducer,
  authReducer,
  getValueSearchReducer,
  getDetailViTriReducer,
  getListRoomPaginateReducer,
  getAdvancedSearchValueReducer,
  getDetailRoomReducer,
  getListCommentReducer,
  putUserDetailReducer,
  uploadAvatarReducer,
  createBookingReducer,
  getListBookingHistoryReducer,
  getDetailHistoryReducer,
  getListUserAdminReducer,
  getDetailUserAdminReducer,
  getListLocationReducer,
  getDetailLocationReducer,
  getListRoomReducer,
  getAdminDetailRoomReducer,
  getListTicketReducer,
  getDetailTicketReducer,
  getListValueateReducer,
  getDetailValueateReducer
});
