import React from 'react';
import logo from './logo.png'
import './styles.css'

function Header({setComponent}) {
    const handleClick = (command) => {
        setComponent(c=>c=command)
    }

  return (
    <div className="header">
        <div className='week'>
          <div className='logo'>
          <img src={logo}>
          </img>
          <h1>Cut&Book</h1>
          </div>
          
          <div className ="buttons-dev">
          <button class="buttons" onClick={()=>{handleClick("home")}}>Home</button>
          {/* <button class="buttons" onClick={()=>{handleClick("login")}}>Login</button>
          <button class="buttons" onClick={()=>{handleClick("register")}}>Register</button> */}
          </div> 
          </div>         
    </div>
  );
}

export default Header;
