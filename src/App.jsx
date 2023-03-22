import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

import MainLayout from "./components/MainLayout"

import Site from "./pages/Site"
import Powerplant from "./pages/Powerplant"
import PowerplantTypes from "./pages/PowerplantTypes"
import ManageProtocols from "./pages/ManageProtocols"
import Templates from "./pages/Templates"
import Variants from "./pages/Variants"
import ItemType from "./pages/ItemType"
import Definitions from "./pages/Definitions"
import Users from "./pages/Users"
import Groups from "./pages/Groups"
import Feedback from "./pages/Feedback"
import Profile from "./pages/Profile"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
    <Route index element={<Site/>}/>
    <Route path="/powerplant" element={<Powerplant/>}/>
    <Route path="/powerplant/types" element={<PowerplantTypes/>}/>
    <Route path="/protocols/manage" element={<ManageProtocols/>}/>
    <Route path="/templates" element={<Templates/>}/>
    <Route path="/variants" element={<Variants/>}/>
    <Route path="/item/type" element={<ItemType/>}/>
    <Route path="/definitions" element={<Definitions/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Route>
))

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App