import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query";

export const Box = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

`


function LoginPage() {  

  const navigate = useNavigate();


  const mutation = useMutation(
    'login',
    (body) => axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us67.gitpod.io/auth/local',body),
    {      
      onError: (error, variables, context) => {
        alert("로그인 실패")
      },
      onSuccess: (data, variables, context) => {
        navigate("/");
      }      
    }
  )

  const [Email, setEmail] = useState("")  
  const [Password, setPassword] = useState("")  



  const onSubmitHandler = (e) => {
      e.preventDefault();
  
      
      if(Email === "" || Password === ""){
        alert("필수정보를 입력해 주세요.")
      } else {
      mutation.mutate({identifier:Email, password:Password});
      }
  }


  return (
    <Box>
        
      </Box>
  )
}

export default LoginPage