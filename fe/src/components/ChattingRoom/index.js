import React,{useState} from 'react'
import {
  ChattingBox,
  ChattingHeader,
  ChattingWrapper, 
  ChattingMessage, 
  ChattingForm}  from "./styles"
import { useParams } from 'react-router-dom';

function ChattingRoom() {
    const { workspace } = useParams();    


    const [message, setMessage] = useState(``)

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(message)    
    }

  return (    
    <ChattingWrapper>
      <ChattingHeader>
        #일반
      </ChattingHeader>
      <ChattingBox>현재 페이지의 파라미터는 { workspace } 입니다.</ChattingBox>
      <ChattingMessage>
        <ChattingForm onSubmit={handleSubmit}>
          <input onChange={(e)=> setMessage(e.target.value) } style={{width: "100%", height:"100%"}}></input>
          <button>click</button>
        </ChattingForm>
      </ChattingMessage>
    </ChattingWrapper>
  )
}

export default ChattingRoom