import React from 'react'
import {Wrapper} from "./styles"
import ChannelList from "../ChannelList"
import DirectMessage from "../DirectMessages"

function SideBar(props) {
  return (
    <Wrapper>
        <ChannelList />
        <DirectMessage props={props} />
    </Wrapper>
  )
}

export default SideBar