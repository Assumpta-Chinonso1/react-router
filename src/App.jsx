import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './Components/ContactInfo'
import ConactForm from './Components/ConactForm'
import NotFound from './Components/NotFound'
import JobsLayout from './Components/JobsLayout'
import Jobs, { JobsLoader } from './Pages/Jobs'
import JobsDetails, { JobsDetailsLoader } from './Components/JobsDetails'
import Error from './Components/Error'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        
        <Route  index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Products/>}/>
                {/**Nest Route */}
        <Route path='contact' element={<ContactLayout/>}>
         <Route path='info' element={<ContactInfo/>}/>
        <Route path='form' element={<ConactForm/>}/>
        </Route>
        <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
         <Route index element={<Jobs/>} loader={JobsLoader}/>
         <Route path=':id' element={<JobsDetails/>} loader={JobsDetailsLoader}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App