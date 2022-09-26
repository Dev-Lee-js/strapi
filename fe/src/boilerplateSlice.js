import {createSlice} from "@reduxjs/toolkit";
import Axios from "axios"


const boilerplateSlice = createSlice(
    {
      name:"boilerplate",
      initialState:{},
      reducers:{
        login:(state, action)=>{
          state = action.payload
        },
        register:(state, action)=>{                  
          Axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us67.gitpod.io/auth/local/register',action.payload ) 
          .then(function (response) {
            console.log(response);
            console.log(response.data.jwt);
          })
          .catch(function (error) {
            console.log(error);
          });     
        }
      }
    }
  )

  export default boilerplateSlice;
  export const {register, login} = boilerplateSlice.actions;