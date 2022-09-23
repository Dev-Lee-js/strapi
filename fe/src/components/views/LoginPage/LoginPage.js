import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Box = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

`


function LoginPage() {

  const navigate = useNavigate();


  const [Email, setEmail] = useState("")  
  const [Password, setPassword] = useState("")  


  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
  }




  const onSubmitHandler = (e) => {
      e.preventDefault();
      
      if(Email === "" || Password === ""){
        alert("필수정보를 입력해 주세요.")
      }      
      else {
        Axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us67.gitpod.io/auth/local', {
          identifier : Email,          
          password : Password 
        })
        .then(response => {
          if (response.status === 200) {
              navigate("/")
          } else {
              alert('Error˝')
          }
        })
        .catch(function (error) {
          console.log(error);
        });     
      } 
  }


  return (
    <Box>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={Email} onChange={onEmailHandler} type="email" placeholder="Enter email" />            
              </Form.Group>                  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={Password} onChange={onPasswordHandler} type="password" placeholder="Password" />
              </Form.Group>                   
              <Button  onClick={onSubmitHandler} variant="primary" type="submit">
              Submit
              </Button>
            </Form>
      </Box>
  )
}

export default LoginPage