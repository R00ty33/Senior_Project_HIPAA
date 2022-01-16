import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Router, Route, Redirect } from 'react-router-dom';

import HomePage from "./Components/HomePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
