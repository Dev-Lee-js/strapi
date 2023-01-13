import React from 'react'
import LoginForm from '../../components/LoginForm'
import {Container, Header, LogoImage, LinkContainer } from "./styles"

function LoginPage(props) {  

  return (
    <>      
        <Container>
            <Header>
                <LogoImage />
            </Header>
            <LoginForm props={props} />                    
            <LinkContainer >                    
            아직 회원이 아니신가요?&nbsp;
                <a href="/register">회원가입 하러가기</a>
            </LinkContainer >
        </Container>     
    </>
  )
}

export default LoginPage