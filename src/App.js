import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReverseArray from "./components/ReverseArray";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      {/* <MainLayout> */}
      <Routes>
        <Route path="/reverse-array" element={<ReverseArray />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}

export default App;
