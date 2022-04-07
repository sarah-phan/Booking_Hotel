import React from 'react'

const withLayout = (ComposedComponent, LayoutComponent, layoutProps = {}) => {

  const WithLayoutComponent = (props) => {

    return (<LayoutComponent {...layoutProps}>
      <ComposedComponent {...props} />
    </LayoutComponent>)
  }

  return WithLayoutComponent
}

export default withLayout