import {configureStore} from "@reduxjs/toolkit";
import slactSlice from "./slactSlice";

const store = configureStore({
  reducer:{
    slact:slactSlice.reducer
  }
})

export default store