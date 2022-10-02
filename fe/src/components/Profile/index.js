import React, {useState} from 'react'
import {ProfileMenu, ProfileImg, Close, UserProile, LogoutButton, UserName, UserActive} from "./styles"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';



function Profile() {

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();    
    navigate("/login")
  }

  return (
    <>
      <ProfileImg onClick={handleModal}>
      <img src="//www.gravatar.com/avatar/823160b95584bb58712ba5a852eb731b?s=28px&d=retro" alt="ProfileImg" />        
      </ProfileImg>
        {isOpen === false ? null :
          <ProfileMenu>
            <Close onClick={handleModal}>
              <CloseIcon style={{color:"black"}}/>
            </Close>
            <UserProile>
              <img style={{width:"36px",height:"41px",position:"absolute", left:"15px", top:"20px"}}src="//www.gravatar.com/avatar/823160b95584bb58712ba5a852eb731b?s=28px&d=retro" alt="ProfileImg" />
              <UserName>wjswleks</UserName>
              <UserActive>Active</UserActive>
            </UserProile>
            <LogoutButton onClick={onSubmitHandler} type="submit">로그아웃</LogoutButton>
          </ProfileMenu>
        }        
        
    </>
  )
}

export default Profile