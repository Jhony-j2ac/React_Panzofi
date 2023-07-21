import './App.css';
import React from 'react';
import { HeaderComponent } from './components/headerComponent';
import { FooterComponent } from './components/footerComponent';
import logo from './static/Logo.png';
import { LoginComponent } from './components/loginComponent';



class App extends React.Component{
  
  render(){

  

    return (
      <div>
        <HeaderComponent></HeaderComponent>
        {this.state.details.map((output, id)=>(
          <div>{output.name} {output.lastname}</div>
        ))}
        <LoginComponent></LoginComponent>
        <FooterComponent></FooterComponent>

      </div>

    )
  }
}

export default App;
