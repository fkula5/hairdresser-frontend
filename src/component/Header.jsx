import React from 'react';
import logo from './cut white.png'
import './styles.css'
import tło from './tlo2.png'

function Header({setComponent}) {
    const handleClick = (command) => {
        setComponent(c=>c=command)
    }

  return (
    <div className="header">
        <div className='week'>
          <div className='tlo'>
            <img src={tło}>
            </img>
            <div className ="buttons-dev">
            <button class="buttons" onClick={()=>{handleClick("home")}}>Home</button>
          {/* <button class="buttons" onClick={()=>{handleClick("login")}}>Login</button>
          <button class="buttons" onClick={()=>{handleClick("register")}}>Register</button> */}
          </div>
          </div> 
          </div>         
    </div>
  );
}

export default Header;
