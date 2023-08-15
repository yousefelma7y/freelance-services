import React  from  'react';
import './App.css';
import Pages from './components/Pages/Pages';
import Navigate from './components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigate/>
    <Routes>
      <Route path="/" exact  element={<Pages/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
