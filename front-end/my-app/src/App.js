import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Router, Route} from 'react-router-dom';

import HomePage from "./Components/HomePage.js";
import LoginPage from "./Components/LoginPage.js";
import SignUpPage from "./Components/SignUpPage.js";
import CookieProvider from "./Components/CookieProvider.js";
import { ChakraProvider } from '@chakra-ui/react';
import InventoryPage from "./Components/Inventory";
import PrivateRoute from './Components/PrivateRoute';
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import Checkout from "./Components/Checkout.js";

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/Home' element={<HomePage/>} />
          <Route exact path='/Login' element={<LoginPage/>} />
          <Route exact path='/SignUp' element={<SignUpPage/>} />
          <Route exact path='/Inventory' element={<InventoryPage/>} />
          <Route exact path='/Cart' element={<Cart/>} />
          <Route exact path='/Profile' element={<Profile/>} />
          <Route exact path='Checkout' element={<Checkout/>}/>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
