import { useState } from 'react'

import Intro from './componentsConcept/Intro.jsx'
import Intro2 from './componentsConcept/Intro2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Intro2/>
    </>
  )
}

export default App
