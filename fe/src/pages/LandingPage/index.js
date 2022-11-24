import React from 'react'
import {Header} from "./styles"
import Profile from "../../components/Profile/"
import CreactWorkspace from '../../components/CreateWorkspace'
import { Link, Outlet } from 'react-router-dom';

function LandingPage() {
  return (
    <>    

      <Header>
        <Profile />                 
      </Header>      
      <CreactWorkspace />     
      <Outlet />
    </>
  )
}

export default LandingPage