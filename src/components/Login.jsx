import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid, Input, TextField } from "@mui/material";
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <Paper
          elevation={2}
          style={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
             padding: "15px",
             boxShadows: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            justifyContent: "space-between",
          }}
          className="login__container"
          > 
          <div className="titulo">
            <h1>Login</h1>
          </div>
          <TextField
            required
            id="outlined-required"
            label="Usuario"
            defaultValue="Hello World"
            type="text"
            className="input_user"
            />
          <TextField
            required
            id="outlined-required"
            label="Contraseña"
            defaultValue="Hello World"
            type="password"
            className="login_input_password"
            />
            <input type="button" className="btn_login" value="Ingresar" />
          
        </Paper>
      </div>
    </>
  );
};

export default Login;
