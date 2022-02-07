import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Router, Route} from 'react-router-dom';

import HomePage from "./Components/HomePage.js";
import LoginPage from "./Components/LoginPage.js";
import SignUpPage from "./Components/SignUpPage.js";
import CookieProvider from "./Components/CookieProvider.js";
import { ChakraProvider } from '@chakra-ui/react';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  CookieProvider.getEcommerceCookie();

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/Home' element={<HomePage/>} />
          <Route exact path='/Login' element={<LoginPage/>} />
          <Route exact path='/SignUp' element={<SignUpPage/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
