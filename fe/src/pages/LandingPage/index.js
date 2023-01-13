import React from 'react'
import {Header} from "./styles"
import Profile from "../../components/Profile/"
import CreactWorkspace from '../../components/CreateWorkspace'
import SideBar from "../../components/SideBar"
import ChattingRoom from "../../components/ChattingRoom"
import {Container} from "./styles"

function LandingPage(props) { 

  return (
    <>    
      <Header>
        <Profile />                 
      </Header>  
      <Container>
        <CreactWorkspace /> 
        <SideBar props={props} />         
        <ChattingRoom props={props}/>
      </Container>    
    </>
  )
}

export default LandingPage