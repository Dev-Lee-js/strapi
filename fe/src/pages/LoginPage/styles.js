import styled from 'styled-components';
import logo from "../../assets/image/slack_logo.svg"

export const Container = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`

export const Header = styled.h1`
margin-bottom:45px;
text-align:center
`

export const LogoImage = styled.img.attrs({src: `${logo}`})`
width: 200px;
`
export const LinkContainer  = styled.p`
    font-size: 13px;
    color: rgb(97, 96, 97);
    margin: 0px auto 8px;
    width: 400px;
    max-width: 400px;
`