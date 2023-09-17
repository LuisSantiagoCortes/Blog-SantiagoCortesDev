import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '/src/components/Navbar';

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const App = () => {
  // function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/numero" element={<div>numero</div>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
