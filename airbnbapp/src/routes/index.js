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
    exact: false,
    path: "/chi-tiet-phong-o/:id",
    component: lazy(() => import("../container/HomeTemplate/ChiTietPhongO")),
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
