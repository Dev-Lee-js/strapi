import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import {useDispatch} from "react-redux"
import { boilerplate } from '../../../boilerplateSlice';

export const Box = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

`

function RegisterPage() {

  
  const dispatch = useDispatch()

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")


  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onNameHandler = (e) => {
    setName(e.currentTarget.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
  }

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }





  const onSubmitHandler = (e) => {
      e.preventDefault();

         
      
      // if(Email === "" || Name === "" || Password === ""){
      //   alert("필수정보를 입력해 주세요.")
      // }
      // else if (Password !== ConfirmPassword) {
      //   return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
      // }
      // else {        
        dispatch(boilerplate())
      //}
  }


    return (
        <Box>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={Email} onChange={onEmailHandler} type="email" placeholder="Enter email" />            
              </Form.Group>    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={Name} onChange={onNameHandler} type="text" placeholder="Enter name" />            
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={Password} onChange={onPasswordHandler} type="password" placeholder="Password" />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control value={ConfirmPassword} onChange={onConfirmPasswordHandler} type="password" placeholder="Password" />
              </Form.Group>            
              <Button  onClick={onSubmitHandler} variant="primary" type="submit">
              Submit
              </Button>
            </Form>
      </Box>
      )
    }


export default RegisterPage
