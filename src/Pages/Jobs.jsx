import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobData = useLoaderData()
  return (
    <div className='jobs'>
        {jobData.map((jobs)=>{
            return <Link to={jobs.id.toString()} key={jobs.id}>
            <h4>{jobs.title}</h4>
            <p>{jobs.location}</p>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const JobsLoader = async()=>{
    const res = await fetch("http://localhost:5000/jobs")
    return res.json()
}