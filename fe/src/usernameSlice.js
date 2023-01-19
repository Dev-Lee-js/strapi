import {createSlice} from "@reduxjs/toolkit";


const usernameSlice = createSlice(
    {
      name:"usernameSlice",
      initialState:{},        
      reducers:{
        joinData:(state, action) => {          
          state.value = action.payload.userData.username
        },  
      }
    }
  )

  export default usernameSlice;
  