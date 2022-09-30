import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";

export const Box = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

`

function RegisterPage() {

  const navigate = useNavigate()
  
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const mutation = useMutation(
    'addUser',
    (body) => axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us67.gitpod.io/auth/local/register',body),
    {      
      onError: (error, variables, context) => {
        console.log('onError', context);
      },
      onSuccess: (data, variables, context) => {
        navigate("/login");
      }      
    }
  );
  


  const onSubmitHandler = (e) => {
      e.preventDefault();


      if(Email === "" || Name === "" || Password === ""){
        alert("필수정보를 입력해 주세요.")
      }
      else if (Password !== ConfirmPassword) {
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
      }
      else {
      mutation.mutate({email:Email, username:Name, password:Password});
      }
  }


    return (
        <Box>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={Email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />            
              </Form.Group>    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={Name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />            
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={Password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>            
              <Button  onClick={onSubmitHandler} variant="primary" type="submit">
              Submit
              </Button>
            </Form>
      </Box>
      )
    }


export default RegisterPage
