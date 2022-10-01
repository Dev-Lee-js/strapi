import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import {Container, Header, LogoImage, LinkContainer } from "./styles"

function RegisterPage() {
    return (
        <>      
            <Container>
                <Header>
                    <LogoImage />
                </Header>
                <RegisterForm />                    
                <LinkContainer >                    
                    이미 회원이신가요?&nbsp;
                    <a href="/login">로그인 하러가기</a>
                </LinkContainer >
            </Container>     
        </>
      )
    }
export default RegisterPage
