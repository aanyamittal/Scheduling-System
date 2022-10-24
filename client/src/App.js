import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import 'antd/dist/antd.min.css'
// import {Button} from 'antd'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';

function App() {
  return (
    // <div className="App p-5">
    //   <h1>SMART-Scheduling System</h1>
    //   <Button type="primary" ><a href="/login">Primary Button</a></Button>
    
    <BrowserRouter> 
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  // </div>
  );
}

export default App;
