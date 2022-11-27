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


function App() {
  return (
    <BrowserRouter>      
      <Routes>              
        <Route path="/workspace/:workspace/*" element={<LandingPage />}>          
          <Route path="channel/일반" element={<ChattingRoom />}></Route>
        </Route>
        <Route path="/" element={<Navigate replace to="/workspace/Sleact/channel/일반"/>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;