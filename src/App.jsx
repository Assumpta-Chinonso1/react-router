import React from 'react'
//import Navbar from './Components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
//import Contact from './Pages/Contact'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './Components/ContactInfo'
import ContactForm from './Components/ContactForm'
import NotFound from './Components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { JobLoader } from './Pages/Jobs'
import Jobdetails, { JobdetailsLoader } from './Components/Jobdetails'
import Error from './Components/Error'




const App = () => {
 
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
        <Route index element={ <Home/> }/>
        <Route path='products' element={ <Product/>  }/>
        <Route path='about' element={ <About/> }/>

            {/* nest Routes*/}
        <Route path='contact' element={ <ContactLayout/> }>
        <Route path='info' element={<ContactInfo/>}/>
        <Route path='form' element={<ContactForm/>}/>
        </Route>

        <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
         <Route  index element={<Jobs/>} loader={JobLoader}/>
         <Route path=':id' element={<Jobdetails/>} 
         loader={JobdetailsLoader} />
        </Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
      )
    )

  return (
    <div>
            <RouterProvider router={router}/>
            
    </div>
  )
}

export default App
