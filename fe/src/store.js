import {configureStore} from "@reduxjs/toolkit";
import slactSlice from "./slactSlice";
import usernameSlice from "./usernameSlice";

const store = configureStore({
  reducer:{
    slact:slactSlice.reducer,
    username:usernameSlice.reducer
  }
})

export default store