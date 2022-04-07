import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Loading from '../components/loading'
import { getAuth } from '../reducers/moduleAuth/action'

const withAuthen = (ComposedComponent) => {
  const WithAuthComponent = (props) => {
    const loading = useSelector(state => state.authReducer.loading)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
      const token = localStorage.getItem('access_token')
      if (!token || token == 'undefined') {
        if (location.pathname.includes('admin')) {
          window.location.href.replace('/')
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