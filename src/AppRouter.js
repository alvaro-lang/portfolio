import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from './pages/About';

export default function AppRouter(){
  return (
    <Routes>
        <Route path="/" element={<About />} />
    </Routes>
  );
}