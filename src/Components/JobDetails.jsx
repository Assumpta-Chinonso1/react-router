import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Jobdetails = () => {
    const JobDetails = useLoaderData()
    const {id} = useParams()
  return (
    <div className='job-details'>
        <br />
        <br />
        <p><b>Job Title: </b>  {JobDetails.title}</p>
        <hr /><br />
        <p><b>Job Salary: </b>  {JobDetails.salary}</p>
        <hr /><br />
        <p><b>Job Location: </b>  {JobDetails.location}</p>
        <hr /><br />
        <p><b>Job Description: </b>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. <br /> Nisi iste ullam 
        provident ab aliquam <br /> tempora dignissimos quod?
         Expedita <br /> nostrum explicabo numquam repellat sapiente!
          Repellendus <br /> rerum 
        animi dolore quis molestias in.</p>
        <hr /><br />
        <br />
        <button>Apply Now</button>
        <br />
        <br />
        <h3 > Job Details Page is {id}</h3>
    </div>
  )
}

export default Jobdetails

export const JobdetailsLoader = async ({params}) =>{
      const {id} = params;
      const res = await fetch("http://localhost:5000/jobs/" + id)
      if (!res.ok) {
        throw Error("Could not found Job Description");
        
      }
      return res.json()

}