import React, { useEffect, useState } from "react";
import { crearPrestamo, getPrestamos } from "../services/services";
import { Modal, Box, Button } from "@mui/material";
import "./Prestamos.css";


const Prestamos = () => {
  const [prestamos, setPrestamos] = useState([]);
  const [formPrestamo, setFormPrestamo] = useState({
      idLibro:'',
      idUsuario:'',
      idAdmin:'',
      date:''
  })
  const [openModal, setOpenModal] = useState(false)
  const getData = async () => {
    let data = await getPrestamos();
    if (data) {
      setPrestamos(data);
    } else {
      setPrestamos([]);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="prestamo">
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
          <h2 id="child-modal-title">REGISTRAR PRESTAMO</h2>
          <input type='text' placeholder="Usuario" onChange={(e)=>setFormPrestamo({... formPrestamo,['idUsuario']:e.target.value})}></input>
          <input type='text'  placeholder="Libro" onChange={(e)=>setFormPrestamo({... formPrestamo,['idLibro']:e.target.value})}></input>
          <input type='text'  placeholder="Fecha" onChange={(e)=>setFormPrestamo({... formPrestamo,['date']:e.target.value})}></input>
         
          <Button onClick={() => {crearPrestamo(formPrestamo); setOpenModal(false)}}>Close Child Modal</Button>
        </Box>
      </Modal>
      <div className="prestamo__aside">
        <input type="button" value="REALIZAR PRESTAMO" onClick={()=>setOpenModal(true)} className='botonLibro' />
        <input type="button" value="EDITAR PRESTAMO"  className='botonLibro'/>
        <input type="button" value="DEVOLUCION "  className='botonLibro' />
        <input type="button" value="ELIMINAR PRESTAMO"  className='botonLibro' />
      </div>
      <div className="prestamo__content">
        <h3>HISTORIAL DE PRESTAMOS</h3>
        <table>
          <thead>
            <tr>
              <th>CODIGO LIBRO</th>
              <th>ID USUARIO</th>
              <th>FECHA DE ENTREGA</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map((prestamo) => {
              return (
                <tr>
                  <td>{prestamo.idLibro}</td>
                  <td>{prestamo.idUsuario}</td>
                  <td>{prestamo.date}</td>
                  
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prestamos;
