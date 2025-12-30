import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AuthSuccess from "./components/AuthSuccess";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
       {/*  <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;
