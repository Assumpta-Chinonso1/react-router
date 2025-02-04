import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'


const JobsDetails = () => {
    const jobsDetails = useLoaderData()
    const navigate = useNavigate()
    
  return (
    <div className='job-details'>
         <p><b>Job Title :</b>{jobsDetails.title}</p>
         <p><b>Job Salary:</b>{jobsDetails.salary}</p>
         <p><b>Job Location:</b>{jobsDetails.location}</p>
         <p><b>Description:</b>Lorem ipsum dolor <br />sit amet 
         consectetur adipisicing <br /> Voluptate, eaque,
          architecto quia optio, minima pariatur 
           quisquam inventore ipsa soluta <br /> harum deleniti
            expedita nesciunt ex?<br /> Exercitationem 
         voluptatum alias ratione harum.</p>
         <button onClick={()=>navigate('/contact')}>Apply now!</button>
        
    </div>
  )
}

export default JobsDetails

export const JobsDetailsLoader = async({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if (!res.ok) {
        throw Error("Could Not found job detail!!")
    }
    return res.json()


}