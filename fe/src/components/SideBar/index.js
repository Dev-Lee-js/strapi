import React from 'react'
import {Wrapper} from "./styles"
import ChannelList from "../ChannelList"
import DirectMessage from "../DirectMessages"

function SideBar() {
  return (
    <Wrapper>
        <ChannelList />
        <DirectMessage />
    </Wrapper>
  )
}

export default SideBar