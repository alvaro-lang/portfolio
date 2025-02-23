import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from './components/About';

export default function AppRouter(){
  return (
    <Routes>
        <Route path="/" element={<About />} />
    </Routes>
  );
}