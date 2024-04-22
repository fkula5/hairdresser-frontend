import { useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './components/Header'
import HairDressers from './HairDressers'

function App() {
  return (
    <>
    <Header></Header>
    <HairDressers></HairDressers>
    <Footer></Footer> 
    </>
  )
}
export default App