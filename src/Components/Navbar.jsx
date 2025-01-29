import React from 'react'
import logo from '../assets/logo-.png'
//import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='nav'>
        <img src={logo} alt="" width="130px" />
        <ul>
           {/*<Link to='/'><li>Home</li> </Link> 
             <Link to='/products'><li>Products</li></Link>
          <Link to='/about'>About</Link> 
          <Link to='/contact'><li>Contact</li></Link>*/}
          <NavLink to='/'><li>Home</li> </NavLink> 
             <NavLink to='/products'><li>Products</li></NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'><li>Contact</li></NavLink>
          <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button onClick={()=>navigate('/contact', {replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar