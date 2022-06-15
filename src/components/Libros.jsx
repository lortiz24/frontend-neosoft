import React, { useEffect, useState } from "react";
import "./Libros.css";
import { Modal, Box, Button, Loader } from "@mui/material";
import { crearLibro, getBooks } from "../services/services";

const Libros = () => {
  const [libros, setLibros] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formAñadirLibro, setformAñadirLibro] = useState({
      title:'',
      publicacion:{date:'', revista:''},
      portada:'',
      autores:[],
      cantidadEjemplares:0

  })

  const getData = async () => {
    let data = await getBooks();
    console.log(data);
    if (data) {
      setLibros(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="libro">
      <Modal
        hideBackdrop
        open={openModal}
        onClose={setOpenModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
            width: 200,
          }}
        >
          <h2 id="child-modal-title">AÑADIR LIBRO</h2>
          <input type='text' placeholder="titulo" onChange={(e)=>setformAñadirLibro({... formAñadirLibro,['title']:e.target.value})}></input>
          <input type='text'  placeholder="fecha" onChange={(e)=>setformAñadirLibro({... formAñadirLibro,['publicacion']:{... formAñadirLibro.publicacion,['date']:e.target.value}})}></input>
          <input type='text'  placeholder="editorial" onChange={(e)=>setformAñadirLibro({... formAñadirLibro,['publicacion']:{... formAñadirLibro.publicacion,['revista']:e.target.value}})}></input>
          <input type='text'  placeholder="autor" onChange={(e)=>setformAñadirLibro({... formAñadirLibro,['autores']:[e.target.value]})}></input>
          <input type='text'  placeholder="cantidad ejemplares" onChange={(e)=>setformAñadirLibro({... formAñadirLibro,['cantidadEjemplares']:[e.target.value]})}></input>
          <Button onClick={() =>{ crearLibro(formAñadirLibro);setOpenModal(false)}}>Guardar y Cerrar</Button>
        </Box>
      </Modal>
      <div className="libro__aside">
        <input
          type="button"
          value="AÑADIR LIBRO"
          className='botonLibro'
          onClick={() =>{ setOpenModal(true)}}
        />
        <input className='botonLibro' type="button" value="EDITAR LIBRO" />
        <input className='botonLibro' type="button" value="BUSCAR LIBRO" />
        <input className='botonLibro' type="button" value="ELIMINAR LIBRO" />
      </div>
      <div className="libro__content">
        <h3>INVETARIO LIBROS</h3>
        <table>
          <thead>
            <tr>
              <th>CODIGO LIBRO</th>
              <th>TITULO</th>
              <th>AUTOR</th>
              <th>EDITORIAL</th>
              <th>PAGINAS</th>
              <th>GENERO</th>
            </tr>
          </thead>
          <tbody>
            {libros.map((libro) => {
              return (
                <tr key={libro._id}>
                  <td>{libro._id}</td>
                  <td>{libro.title}</td>
                  <td>{libro.autores.join()}</td>
                  <td>{libro.editorial}</td>
                  <td>{libro.paginas}</td>
                  <td>{libro.genero}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Libros;
