import React from 'react';
import './styles.css'

function Header({setComponent}) {
    const handleClick = (command) => {
        setComponent(c=>c=command)
    }

  return (
    <div className="header">
        <div className='week'>
          <h1>Cut&Book</h1>
          <button class="button2" onClick={()=>{handleClick("home")}}>Home</button>
          <button class="button3" onClick={()=>{handleClick("login")}}>Login</button>
          <button class="button4" onClick={()=>{handleClick("register")}}>Register</button>
        </div>
    </div>
  );
}

export default Header;
