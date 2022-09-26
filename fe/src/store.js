import {configureStore} from "@reduxjs/toolkit";
import boilerplateSlice from "./boilerplateSlice";

const store = configureStore({
  reducer:{
    boilerplate:boilerplateSlice.reducer
  }
})

export default store