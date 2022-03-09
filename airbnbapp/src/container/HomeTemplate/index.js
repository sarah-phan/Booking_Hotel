import React from "react";
import { Route } from "react-router-dom";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
      <Route exact={exact} path={path} component={component} />
    </div>
  );
}
