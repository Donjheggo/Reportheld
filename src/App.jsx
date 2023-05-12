import React, {useState, useEffect} from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

import MainLayout from "./components/MainLayout"

import Site from "./pages/Site"
import Powerplant from "./pages/Powerplant"
import PowerplantTypes from "./pages/PowerplantTypes"
import ManageProtocols from "./pages/ManageProtocols"
import Templates from "./pages/Templates"
import Variants from "./pages/Variants"
import ItemTypes from "./pages/ItemTypes"
import Definitions from "./pages/Definitions"
import Users from "./pages/Users"
import Groups from "./pages/Groups"
import Feedback from "./pages/Feedback"
import Profile from "./pages/Profile"
import LoginPage from "./pages/Login"
import AuthLayout from "./components/AuthLayout"
import Loader from './components/Loader'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<AuthLayout/>}>
    <Route index element={<LoginPage/>}/>
  </Route>
  <Route element={<MainLayout/>}>
    <Route path="/site" element={<Site/>}/>
    <Route path="/powerplant" element={<Powerplant/>}/>
    <Route path="/powerplant/types" element={<PowerplantTypes/>}/>
    <Route path="/protocols/manage" element={<ManageProtocols/>}/>
    <Route path="/templates" element={<Templates/>}/>
    <Route path="/variants" element={<Variants/>}/>
    <Route path="/item/type" element={<ItemTypes/>}/>
    <Route path="/definitions" element={<Definitions/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Route>
  </>
))

const App = () => {

  const [preloader, setPreloader] = useState(false)

  useEffect( () => {
    setPreloader(true)
    setTimeout( () => {
      setPreloader(false)
    }, 2000)
  }, [])

  return (
    <>
      {preloader ?  <Loader/> :
        <div>
          <RouterProvider router={router} />
        </div>
      }
    </>
  )
}

export default App