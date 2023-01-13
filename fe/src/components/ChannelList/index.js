import React from 'react'
import {WorkspaceName, Channels, ChannelName} from "./styles"
import { useParams } from 'react-router-dom';


function ChannelList() { 

    const { workspace } = useParams();
  
  return (
    
    <>                    
      <WorkspaceName>{workspace}</WorkspaceName> 
      <Channels>Channels</Channels>      
      <ChannelName href="/workspace/sleact/channel/일반">
        <span># 일반</span>
      </ChannelName>      
    </>

  )
}

export default ChannelList