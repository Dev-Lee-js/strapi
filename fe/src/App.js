import {
  BrowserRouter,
  Routes,
  Route,  
  Navigate
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChattingRoom from "./components/ChattingRoom"
import { createGlobalStyle } from 'styled-components';
import React,{useState} from "react"
import {useDispatch} from "react-redux"
import slactSlice from "./slactSlice";
const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;    
  }
  a{
    color: black; text-decoration: none;   
  }
  
`;

function App() {

  const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [joinData, setJoinData] = useState({});

    function onJoinSuccess(data) {
      
        setJoinData(data);        
        setUsername(data.userData.username);
        setRoom(data.userData.room);        
    }

    dispatch(slactSlice.actions.joinData({joinData,room,username}))

  return (
    
    <>
    <GlobalStyle />
    <BrowserRouter>      
      <Routes>              
        <Route path="/workspace/:workspace/*" 
        element={<LandingPage/>}>          
            <Route path="channel/일반" element={<ChattingRoom />}></Route>
        </Route>
        <Route path="/" element={<Navigate replace to="/workspace/Sleact/channel/일반"/>}></Route>
        <Route path="/login" element={<LoginPage onJoinSuccess={onJoinSuccess} />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
  </BrowserRouter>
  </>
  
  );
}

export default App;