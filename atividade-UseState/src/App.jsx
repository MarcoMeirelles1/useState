import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import coracao from '/assets/coracaoo'
<ass></ass>
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cond, setCond] = useState(true)
  const [senai, setSenai] = useState("")
    if(senai == "SENAI" || senai == "senai" || senai == "Senai") {
         var teste='Apareci'
    }
  return (
    <>
      <div className='botaoCoracao'>
        <button onClick={() => setCount((count) => count + 1)}>
          <h1>coracao</h1>
          {count}
        </button>
      </div>
      <div className='imagemMassa'>
        <img src="./assets"/>
      </div>
    </>
  )
}

export default App