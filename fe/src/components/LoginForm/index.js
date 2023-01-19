import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {Btn} from "./styles"
import { socket } from '../../config/web-sockets';
import {useDispatch} from "react-redux"
import slactSlice from "../../slactSlice";
import usernameSlice from "../../usernameSlice";
function LoginForm() {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Email, setEmail] = useState("")    
    const [Password, setPassword] = useState("")    
  
    const mutation = useMutation(
        'login',
        (body) => axios.post('https://1337-devleejs-strapi-paz1eyu3a7x.ws-us83.gitpod.io/auth/local',body),
        {      
          onError: (error, variables, context) => {
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          },
          onSuccess: (data, variables, context) => {            
            localStorage.setItem('username', data.data.user.username);     
            localStorage.setItem('jwt', data.data.jwt);        
            const username =  data.data.user.username
            const room = "Sleact"
            socket.emit('join', { username, room }, (error) => {
              if(error) {                
                  alert(error);
              }
          });   
            navigate("/")            
          }      
        }
      )
      
  
      const onSubmitHandler = (e) => {
        e.preventDefault();    
        
        if(Email === "" || Password === ""){
          alert("필수정보를 입력해 주세요.")
        } else {
        mutation.mutate({identifier:Email, password:Password});         
                
        }
    }
  
    socket.on('welcome', (data) => {
      
      dispatch(slactSlice.actions.joinData(data))
      dispatch(usernameSlice.actions.joinData(data))
  });
  
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
            </Grid>
            <Btn  onClick={onSubmitHandler} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              로그인
            </Btn>          
          </Box>
        </Box>      
      </Container>  
    )
}

export default LoginForm