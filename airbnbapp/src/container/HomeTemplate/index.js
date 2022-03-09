<<<<<<< HEAD
import React from "react";
import { Route } from "react-router-dom";
=======
import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './_components/Footer'
>>>>>>> dedcd4553895aed1eb57a0a22673cdde56daa2ad

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <div>
<<<<<<< HEAD
      <Route exact={exact} path={path} component={component} />
=======
      <Route
        exact = {exact}
        path = {path}
        component = {component}
      />
      <Footer/>
>>>>>>> dedcd4553895aed1eb57a0a22673cdde56daa2ad
    </div>
  );
}
