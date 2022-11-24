import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from "./components/TestPage"


function App() {
  return (
    <BrowserRouter>      
      <Routes>              
         <Route path="/" element={<LandingPage />}>
            <Route path="/workspace/:workspace/channel/일반" element={<TestPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;