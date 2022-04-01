import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/loading'
import { getAuth } from '../reducers/moduleAuth/action'

const withAuthen = (ComposedComponent) => {
  const WithAuthComponent = (props) => {
    const loading = useSelector(state => state.authReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
      const token = localStorage.getItem('access_token')
      if (!token || token == 'undefined') {
        props.history?.push('/')
        if (window.location.pathname == '/') {
          window.location.reload()
        }
      } else {
        dispatch(getAuth(token))
      }
    }, [])

    return <div>
      {loading && <Loading />}
      {!loading && <ComposedComponent {...props} />}
    </div> 
  }

  return WithAuthComponent
}

export default withAuthen