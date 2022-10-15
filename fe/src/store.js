import {configureStore} from "@reduxjs/toolkit";
import workspaceSlice from "./workspaceSlice";

const store = configureStore({
  reducer:{
    workspace:workspaceSlice.reducer
  }
})

export default store