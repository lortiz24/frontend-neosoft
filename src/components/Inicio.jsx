import React from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="inicio__main">
        <h2 className="inicio__titulo">NEOSOFT</h2>
        <div className="inicio__container--description">
          <p>
            Bienvenido a NeoSoft, tu sistema bibliotecario virtual, la mejor herramienta para llevar el control de tu biblioteca ha llegado
            ADELANTE!
          </p>
        </div>
        <div className="inicio__container--main">
          <div className="inicio__container">
            <h3>Ir a Libros</h3>
            <a href="/Libros">IR</a>
          </div>
          <div className="inicio__container">
            <h3>Ir a Prestamos</h3>
            <a href="/Prestamos">IR</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
