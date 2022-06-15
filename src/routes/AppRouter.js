import React from "react";
import { Routes, Route } from "react-router-dom";
import Libros from "../components/Libros";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Registro from "../components/Registro";
import Prestamos from "../components/Prestamos";
import Inicio from "../components/Inicio";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Inicio />} />
        <Route path="/Libros" element={<Libros />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Prestamos" element={<Prestamos />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
