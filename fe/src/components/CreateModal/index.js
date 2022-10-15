import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {WorkPlus, Close} from "./styles"
import {Btn} from "./styles"
import styled from 'styled-components';
import {useDispatch} from "react-redux"
import { create } from '../../workspaceSlice';
import Axios from "axios"

const ModalStyle = styled(Modal)`


  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
    background-color: rgb(255 255 255 / 0%);
  }
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f8f8f8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const TextFieldStyle = {
    bgcolor:"#fff"
  };
  

function CreateModal() {

    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [WorkName, setWorkName] = useState("")    
    const [WorkURL, setWorkURL] = useState("")  
    

    const onSubmitHandler = (e) => {
      e.preventDefault();    
      
      Axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us70.gitpod.io/Workspaces',
      {URL:WorkURL,
      Name:WorkName}).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
               
      
      
  }
  
    return (
      <div>
        <WorkPlus onClick={handleOpen}>+</WorkPlus>
        <ModalStyle
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"             
          >          
          <Box sx={style}>
          <Close onClick={handleClose}>
              <CloseIcon style={{color:"black"}}/>
          </Close>
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
                <TextField value={WorkName} onChange={e => setWorkName(e.target.value)}
                  required
                  fullWidth                  
                  label="워크스페이스 이름"                  
                  type="text"
                  sx={TextFieldStyle}                
                />
              </Grid>                  
              <Grid item xs={12}>
                <TextField value={WorkURL} onChange={e => setWorkURL(e.target.value)}
                  required
                  fullWidth                  
                  label="워크스페이스 URL"
                  type="text"                                    
                  sx={TextFieldStyle}    
                />
              </Grid>                      
            </Grid>
            <Btn  onClick={onSubmitHandler} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              생성하기
            </Btn>          
          </Box>
        </Box>      
      </Container>  
          </Box>
        </ModalStyle>
      </div>
    );
}

export default CreateModal