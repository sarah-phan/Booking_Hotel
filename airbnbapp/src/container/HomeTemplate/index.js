import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './_components/Footer'

export default function HomeTemplate(props) {
  const {exact, path, component} = props
  return (
    <div>
      <Route
        exact = {exact}
        path = {path}
        component = {component}
      />
      <Footer/>
    </div>
  )
}
