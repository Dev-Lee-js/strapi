
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "axios"


// createAsyncThunk 생성하기
export const boilerplate = createAsyncThunk(
  // action 이름
  "boilerplate",
  // 처리할 비동기 함수
  async () => {
    // 서버에서 데이터를 불러옴
    const res = await Axios.post('https://1337-devleejs-strapi-lg9aejq4v0y.ws-us67.gitpod.io/auth/local/register',{
      email:"qkqh2@qkqh2.com",
      username:"qkqh2",
      password:"qkqh2"

    });
    // action의 payload 리턴
    return res.data;
  }
);


const boilerplateSlice = createSlice(  
    {
      name:"boilerplate",
      initialState: {list: []},
      reducers: {},
      // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
      extraReducers: {
        [boilerplate.pending]: (state, action) => {
          console.log('pending');
        },
        // fullflled 되었을 때, 서버에서 받아온 데이터를 state에 넣어줌!
        // 첫번째 파라미터는 redux의 state이고 두번째 파라미터는 action
        [boilerplate.fulfilled]: (state, action) => {
          state.list = action.payload;
          console.log(state.list );
        },
        [boilerplate.rejected]: (state, action) => {
          console.log('rejected')
        }
      }
    }
  )

  export default boilerplateSlice;  