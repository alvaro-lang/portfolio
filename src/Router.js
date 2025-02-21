import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" component={Home} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
