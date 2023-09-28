import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./components/home/home";
import Contato from "./components/contato/contato";
import NotFound from "./components/404/404";

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contato" Component={Contato}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
  
  const RoutesWrapper = () => (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
  
  export default RoutesWrapper;