import React from 'react'
import {Container} from "../../Styles/LoginContainer/LoginContainer.style" 
import {LoginHeader,LogoImage} from "../../Styles/LoginHeader/LoginHeader.style"
import UserForm from "../../UserForm/UserForm"


function RegisterPage() {
    return (
        <Container>
           <LoginHeader>
            <LogoImage />
           </LoginHeader>
           <UserForm />
      </Container>
      )
    }
export default RegisterPage
