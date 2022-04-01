import { lazy } from "react";
import HomeTemplate from "../container/HomeTemplate";
import AdminTemplate from "../container/AdminTemplate";

const routeHome = [
  {
    exact: false,
    path: "/danh-sach-phong-o/:id",
    component: lazy(() => import("../container/HomeTemplate/DanhSachPhongO")),
  },
  {
    exact: true,
    path: "/chi-tiet-phong-o/:id",
    component: lazy(() => import("../container/HomeTemplate/ChiTietPhongO")),
  },
  {
    exact: false,
    path: "/chi-tiet-phong-o/:id/xac-nhan",
    component: lazy(() => import("../container/HomeTemplate/XacNhan")),
  },
  {
    exact: false,
    path: "/tai-khoan/:id",
    component: lazy(() => import("../container/HomeTemplate/_components/UserDashboard")),
  },
];

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    authen: true,
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/UserAdmin")
    ),
  },{
    exact: true,
    path: "/admin/users",
    key: "users",
    authen: true,
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/UserAdmin")
    ),
  },
  {
    exact: true,
    path: "/admin/dang-ky-admin",
    key: "add-user",
    authen: true,
    defaultSelectedKeys: ['2'],
    defaultOpenKeys: ['sub1'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/DangKyAdmin")
    ),
  },
  { 
    exact: true,
    path: "/admin/locations",
    key: "locations",
    authen: true,
    defaultSelectedKeys: ['3'],
    defaultOpenKeys: ['sub2'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Location")
    ),
  },
  {
    exact: true,
    path: "/admin/location/:id",
    key: "add-location",
    authen: true,
    defaultSelectedKeys: ['4'],
    defaultOpenKeys: ['sub2'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Location/Detail")
    ),
  },
  { 
    exact: true,
    path: "/admin/rooms",
    key: "rooms",
    authen: true,
    defaultSelectedKeys: ['5'],
    defaultOpenKeys: ['sub3'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Room")
    ),
  },
  {
    exact: true,
    path: "/admin/room/:id",
    key: "add-room",
    authen: true,
    defaultSelectedKeys: ['6'],
    defaultOpenKeys: ['sub3'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Room/Detail")
    ),
  },
  { 
    exact: true,
    path: "/admin/valueates",
    key: "valueates",
    authen: true,
    defaultSelectedKeys: ['7'],
    defaultOpenKeys: ['sub4'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Valueate")
    ),
  },
  {
    exact: true,
    path: "/admin/valueate/:id",
    key: "add-valueate",
    authen: true,
    defaultSelectedKeys: ['8'],
    defaultOpenKeys: ['sub4'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Valueate/Detail")
    ),
  },
  { 
    exact: true,
    path: "/admin/tickets",
    key: "tickets",
    authen: true,
    defaultSelectedKeys: ['9'],
    defaultOpenKeys: ['sub5'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Ticket")
    ),
  },
  {
    exact: true,
    path: "/admin/ticket/:id",
    key: "add-ticket",
    authen: true,
    defaultSelectedKeys: ['10'],
    defaultOpenKeys: ['sub5'],
    Layout: lazy(() =>
      import("../container/AdminTemplate/Layout")
    ),
    component: lazy(() =>
      import("../container/AdminTemplate/Ticket/Detail")
    ),
  },
];

export const renderRouteHome = () => {
  return routeHome?.map((route, index) => {
    return (
      <HomeTemplate
        {...route}
      />
    );
  });
};

export const renderRoutesAdmin = () => {
  return routesAdmin?.map((route, index) => {
    return (
      <AdminTemplate
        key={`${route.key}-${index}`}
        {...route}
      />
    );
  });
};
