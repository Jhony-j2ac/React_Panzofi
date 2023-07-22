import './App.css';
import React from 'react';
import { HeaderComponent } from './components/headerComponent';
import { FooterComponent } from './components/footerComponent';
import logo from './static/Logo.png';
import { LoginComponent } from './components/loginComponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AdminComponent } from './components/adminComponent';
import { VisitorComponent } from './components/visitorComponent';



class App extends React.Component{
  
  render(){

  

    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path='/' element={<LoginComponent />}></Route>
          <Route path='/Admin' element={<AdminComponent />}></Route>
          <Route path='/Visitor' element={<VisitorComponent />}></Route>
        </Routes>
        <FooterComponent></FooterComponent>

      </BrowserRouter>

    )
  }
}

export default App;
