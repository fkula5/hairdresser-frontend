import { useState } from 'react'
import Header from './components/Header'
import HairDressers from './HairDressers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <HairDressers></HairDressers>
    </>
  )
}

export default App
