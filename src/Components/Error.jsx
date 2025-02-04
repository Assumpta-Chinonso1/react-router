import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
  return (
    <div className='job-details'>
        <h3>An error occurred!!!😧</h3>
        <p>{error.message}</p>
        <button className='button' onClick={()=>navigate('/')}>Go to HomePage</button>
    </div>
  )
}

export default Error