import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className='layout'>
        <h2>Jobs Opening</h2>
        <p>List of Current Jobs Opening in our company</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout