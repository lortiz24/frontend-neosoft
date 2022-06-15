import logo from './logo.svg';
import './App.css';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './auth/authContext';
import { useReducer } from 'react';
import { authReducer } from './auth/authReducer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {name:'NEOSOFT',logged:false}
  }
  const [user, dispatch] = useReducer(authReducer, {}, init)
  return (
    <>
      {AuthProvider(<BrowserRouter><AppRouter /></BrowserRouter>,{user,dispatch})}
    </>

  );
}

export default App;
