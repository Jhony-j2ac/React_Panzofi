import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/Logo.png';
import { useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
    const navigate = useNavigate();
    const rootStyle = {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.1,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: -9999999
      };

    const logout = ()=>{
        localStorage.clear();
        navigate('/');
    }
  return (
    <header>
        
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo}  alt="Logo" width="30" height="30" className="d-inline-block align-top"></img>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logout}>logout</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <div style={rootStyle}></div>

    </header>
  )
}
