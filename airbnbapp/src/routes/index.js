import { lazy } from "react";
import HomeTemplate from "../container/HomeTemplate";
import AdminTemplate from "../container/AdminTemplate";

const routeHome = [
    {
        exact: true,
        path: "/",
        component: lazy(() => import("../container/HomeTemplate/TrangChu"))
    }
]

export const renderRouteHome = () => {
    return routeHome?.map((route, index) => {
        return(
            <HomeTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
            />
        )
    })
}