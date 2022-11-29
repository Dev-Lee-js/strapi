import React,{useEffect, useState} from 'react'
import {Wrapper, WorkBtn} from "./styles"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {WorkPlus, Close} from "./styles"
import {Btn} from "./styles"
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from 'react-router-dom';




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


function CreactWorkspace() { 

  const navigate = useNavigate()

  
  const [WorkSpace, setWorkSpace] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('jwt')
    const name = localStorage.getItem('username')
    Axios.get(`https://1337-devleejs-strapi-paz1eyu3a7x.ws-us77.gitpod.io/workspaces?author.username=${name}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }        
      }).
      then(function (response) {      
        setWorkSpace(response.data);
      })
      .catch(function (error) {
        console.log(error);
        navigate("/login")
      });
      
  }, []);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [WorkName, setWorkName] = useState("")    
  const [WorkURL, setWorkURL] = useState("")    

  const onSubmitHandler = (e) => {
    e.preventDefault();       
    const token = localStorage.getItem('jwt')
    Axios.post('https://1337-devleejs-strapi-paz1eyu3a7x.ws-us77.gitpod.io/Workspaces',
      {URL:WorkURL,
      Name:WorkName},{
        headers: {
          Authorization: `Bearer ${token}`
        }        
        }).then(function () {
          const name = localStorage.getItem('username')
          Axios.get(`https://1337-devleejs-strapi-paz1eyu3a7x.ws-us77.gitpod.io/workspaces?author.username=${name}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }        
          }).
          then(function (response) {      
            setWorkSpace(response.data);
          })
          .catch(function (error) {
            console.log(error);            
          });
      })
      .catch(function (error) {
        console.log(error);
      });   
  }
  
  return (
    
    <Wrapper>                
      {WorkSpace.map((item) => {
       return <WorkBtn key={item.id}>
               <button>
                  <Link to={`/workspace/${item.URL}/channel/일반`}>{item.Name.slice(0, 1).toUpperCase()}</Link>                
                </button>
              </WorkBtn>          
        })}      
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
    </Wrapper>

  )
}

export default CreactWorkspace