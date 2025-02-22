import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './components/Home';

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}