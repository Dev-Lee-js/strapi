import React from 'react'
import {Header} from "./styles"
import Profile from "../../components/Profile/"
import CreactWorkspace from '../../components/CreateWorkspace'


function LandingPage() {
  return (
    <>
      <Header>
        <Profile />                 
      </Header>
      <CreactWorkspace />      
    </>
  )
}

export default LandingPage