import React from "react";
import { Route } from "react-router-dom";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import withAuth from '../../hoc/withAuth'

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
      <Navbar/>
      <Route exact={exact} path={path} component={withAuth(component)} />
      <Footer />
    </div>
  );
}
