import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

import HomePage from "./Components/HomePage.js";
import LoginPage from "./Components/LoginPage.js";
import SignUpPage from "./Components/SignUpPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/Home' element={<HomePage/>} />
        <Route exact path='/Login' element={<LoginPage/>} />
        <Route exact path='/SignUp' element={<SignUpPage/>} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
