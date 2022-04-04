import React from "react";
import { Route } from "react-router-dom";
import withAuth from '../../hoc/withAuth'
import withLayout from '../../hoc/withLayout'

export default function AdminTemplate({ exact, path, component
  , Layout, authen,
  defaultSelectedKeys, defaultOpenKeys
}) {

  let renderComponent = component
  if (Layout) {
    renderComponent = withLayout(renderComponent, Layout, {
      defaultSelectedKeys,
      defaultOpenKeys
    })
  }
  if (authen) {
    renderComponent = withAuth(renderComponent)
  }

  return (
    <Route exact={exact} path={path} component={renderComponent} />
  );
}
