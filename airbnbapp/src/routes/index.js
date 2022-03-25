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
  //Admin
  {
    exact: false,
    path: "/admin",
    // component: Dashboard,
    component: lazy(() =>
      import("../container/AdminTemplate/AdminPage/index.js")
    ),
  },
];

export const renderRouteHome = () => {
  return routeHome?.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export const renderRoutesAdmin = () => {
  return routesAdmin?.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};
