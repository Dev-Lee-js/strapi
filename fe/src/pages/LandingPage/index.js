import React from 'react'
import {Header} from "./styles"
import Profile from "../../components/Profile/"
import CreactWorkspace from '../../components/CreateWorkspace'
import Channel from "../../components/ChannelList"
import ChattingRoom from "../../components/ChattingRoom"

function LandingPage() {

  return (
    <>    

      <Header>
        <Profile />                 
      </Header>      
      <CreactWorkspace /> 
      <Channel />         
      <ChattingRoom />
    </>
  )
}

export default LandingPage