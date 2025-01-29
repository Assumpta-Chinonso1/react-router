import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const JobsData = useLoaderData()
  return (
    <div className='jobs'>
         {JobsData.map((job)=>{
          return <Link to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
         })}
    </div>
  )
}

export default Jobs

export const JobLoader = async()=>{

const res = await fetch("http://localhost:5000/jobs")
return  res.json()

}