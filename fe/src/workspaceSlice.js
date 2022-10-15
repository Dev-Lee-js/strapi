import {createSlice} from "@reduxjs/toolkit";


const workspaceSlice = createSlice(
    {
      name:"workspace",
      initialState:[
        { id: 1, href: "눈사람f" ,firstWord: "S" },        
      ],      
      reducers:{
        create:(state, action) => {
          
          state.push(action.payload)
        },  
      }
    }
  )

  export default workspaceSlice;
  export const {create} = workspaceSlice.actions;