import React from 'react'
import Sidenav from './Sidenav'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div class="flex">
      <Sidenav />
      <MainContainer />
    </div>
  )
}

export default Body