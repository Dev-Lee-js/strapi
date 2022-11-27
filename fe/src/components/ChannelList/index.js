import React,{useEffect, useState} from 'react'
import {Wrapper, WorkspaceName, Channels, ChannelName} from "./styles"
import { useParams } from 'react-router-dom';


function ChannelList() { 

    const { workspace } = useParams();
  console.log(workspace) 
  return (
    
    <Wrapper>                    
      <WorkspaceName>{workspace}</WorkspaceName> 
      <Channels>Channels</Channels>      
      <ChannelName href="/workspace/sleact/channel/일반">
        <span># 일반</span>
      </ChannelName>      
    </Wrapper>

  )
}

export default ChannelList