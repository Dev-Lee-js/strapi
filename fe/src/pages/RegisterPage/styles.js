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
`

export const LogoImage = styled.img.attrs({src: `${logo}`})`
width: 200px;
`