import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Btn} from "./styles"

function UserForm() {

  const navigate = useNavigate()
  
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const mutation = useMutation(
    'addUser',
    (body) => axios.post('https://1337-devleejs-strapi-paz1eyu3a7x.ws-us75.gitpod.io/auth/local/register',body),
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
    <Container component="main" maxWidth="xs">      
      <Box
        sx={{          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >                
        <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField value={Email} onChange={e => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="이메일 주소"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField value={Name} onChange={e => setName(e.target.value)}
                required
                fullWidth
                name="password"
                label="닉네임"
                type="text"
                id="password"
                autoComplete="new-password"
              />
            </Grid>     
            <Grid item xs={12}>
              <TextField value={Password} onChange={e => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="비밀번호 확인"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>        
          </Grid>
          <Btn  onClick={onSubmitHandler} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            회원가입
          </Btn>          
        </Box>
      </Box>      
    </Container>  
  )
}

export default UserForm