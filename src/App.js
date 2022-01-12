import logo from './logo.svg';
import './App.css';
import { isMobile } from 'react-device-detect'
import Navbar from './Components/Navbar';
import Register from './Pages/Register'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
function App() {
  // if(!isMobile) {
  //   window.location.href = "http://192.168.1.157:3000"
  // }
  return (
    <div className="App">
      <Navbar />
      <div className="pt-5 pb-20">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/shop/*" element={<Shop />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
