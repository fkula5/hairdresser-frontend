import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './component/Footer';
import Info from './component/Info';
import Header from './component/Header';
import Services from './component/Services';
import Login from './component/Login';
import Register from './component/Register';
import Schedule from './component/Schedule';
import Grades from './component/Grades';
function App() {
  const [component, setComponent] = useState("");

  useEffect(() => {
    // Ustawienie domyślnego komponentu na "home" po załadowaniu strony
    setComponent("home");
  }, []);

  return (
    <>
      <Header setComponent={setComponent} />
      {component === "home" ? <Services setComponent={setComponent} /> :
        component === "register" ? <Register /> :
        component === "book" ? <Schedule/>:
        component === "login" ? <Login /> : null}
      <Footer />
    </>
  )
}

export default App;
