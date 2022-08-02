import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from './Home'

function HomeContainer() {

  return (
    <div>
        {localStorage.getItem('isLoggedIn')==null?
        <Navigate to='/login' />:
        <Home />}
    </div>
  )
}

export default HomeContainer