import React from 'react'
import logo from '../static/Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const VisitorComponent = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  let user = localStorage.getItem("user");

  if(!user){
    setTimeout( ()=>{
      navigate('/');
    },2000);
    
  }


  let onClickButton1 = (event)=>{

    if(!user){
      navigate('/');return;
    }
    let formData = {
      "button": 1,
      "user": localStorage.getItem("user"),
      "session": localStorage.getItem("session")
    }
    axios.put(`${apiUrl}/Panel`, formData)
        .then(res => {
            window.alert("Añadio a boton1");
        })
        .catch(err => {});
  }

  let onClickButton2 = (event)=>{
    let formData = {
      "button": 2,
      "user": localStorage.getItem("user"),
      "session": localStorage.getItem("session")
    }
    axios.put(`${apiUrl}/Panel`, formData)
        .then(res => {
            window.alert("Añadio a boton2");
        })
        .catch(err => {});
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>

        <div className="col-md-8">
          <h1>User panel</h1>
          <p>Seleccione el boton de su preferencia para iniciar acciones</p>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mr-3" onClick={onClickButton1}>Botón 1</button>
            <button className="btn btn-secondary" onClick={onClickButton2}>Botón 2</button>
          </div>
        </div>
      </div>
    </div>
  )
}
