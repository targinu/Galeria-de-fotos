import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./components/home/home";
import Contato from "./components/contato/contato";

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contato" Component={Contato}></Route>
      
    </Routes>
  );
  
  const RoutesWrapper = () => (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
  
  export default RoutesWrapper;