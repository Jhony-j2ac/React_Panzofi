import React , { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let  data  = null;
        axios.post(`${apiUrl}/`, formData)
        .then(res => {
            data = res.data;
            if(data.status === "ok"){
                localStorage.setItem("user", data.user)
                localStorage.setItem("type", data.type)
                localStorage.setItem("session", data.session)

                if(data.type === 2){
                    navigate('/Admin');
                }else{
                    navigate('/Visitor');
                }
            }
        })
        .catch(err => {});
    };
    
    return (
        
        <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
        <h2 className="mb-4">Iniciar sesión</h2>
        <form  onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input type="email" name='email' className="form-control" id="email" placeholder="Ingresa tu correo electrónico" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type="password" name='password' className="form-control" id="password" placeholder="Ingresa tu contraseña"  value={formData.password} onChange={handleChange} />
        </div>
        
        <button type="submit" name="login" className="btn btn-primary">Iniciar sesión</button>
        </form>
        </div>
        </div>
        </div>
        )
    }
    