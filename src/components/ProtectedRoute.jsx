import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {

    // const user = JSON.parse(localStorage.getItem('user'))

    const user = useSelector( (setCredential) => { return setCredential?.auth } )

    if( !user || !user.accessToken) {
        return <Navigate to="/login" />
    }

  return children;
}

export default ProtectedRoute