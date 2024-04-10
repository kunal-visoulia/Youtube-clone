import React from 'react'
import Sidenav from './Sidenav'
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidenav />
      <Outlet /> {/* show wither main container or watch page */}
    </div>
  )
}

export default Body