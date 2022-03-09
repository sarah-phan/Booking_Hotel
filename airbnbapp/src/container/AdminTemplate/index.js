import React from "react";
import { Route } from "react-router-dom";

export default function AdminTemplate({ exact, path, component }) {
  return (
    <>
      {/* <NavbarAdmin /> */}
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
