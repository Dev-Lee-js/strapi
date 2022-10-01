import React from 'react'
import UserForm from '../../components/UserForm'
import {Container, Header, LogoImage} from "./styles"

function RegisterPage() {
    return (
        <>      
            <Container>
                <Header>
                    <LogoImage />
                </Header>
                <UserForm />       
            </Container>     
        </>
      )
    }
export default RegisterPage
