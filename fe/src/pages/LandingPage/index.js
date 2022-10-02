import React from 'react'
import {Header} from "./styles"
import Workspace from '../../components/Workspace'
import Profile from "../../components/Profile/"


function LandingPage() {
  return (
    <>
      <Header>
        <Profile />                 
      </Header>
      <Workspace />      
    </>
  )
}

export default LandingPage