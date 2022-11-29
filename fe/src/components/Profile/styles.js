import styled from 'styled-components';

export const ProfileMenu = styled.div`
    width: 320px;
    height: 114px;
    background-color: #f8f8f8;
    position: absolute;
    top: 48px;
    z-index:999;
    right: 0px;
    border-radius: 10px;
    box-shadow: -3px 5px 5px 0px #eaeaea;
`

export const Close = styled.div`
  cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
`

export const UserProile = styled.div`
  width:100%;
  height: 81px;
`
export const LogoutButton = styled.button`
  width:100%;
  height: 33px;
  border-style: solid none none;
  border-top: 1px solid rgb(29, 28, 29);
  background-color: #f8f8f8;
`

export const ProfileImg = styled.div`
  float:right
`

export const UserName = styled.span`
  color:black;
  position: absolute;
  left: 65px;
  top: 20px;
`

export const UserActive = styled.span`
    color: #7d7d7d;
    position: absolute;
    left: 65px;
    top: 49px;
    font-size: 12px;
`