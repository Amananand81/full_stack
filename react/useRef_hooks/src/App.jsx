import { useState,useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  //ref...
  const btnRef = useRef() 

  useEffect(()=>{
    btnRef.current.style.backgroundColor="red"
  },[])

  const a = useRef(0)
  a.current=a.current+1
  
  useEffect(()=>{
    console.log(`rending and the value of a is ${a.current}`)
  })

  useEffect(()=>{

  })
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          ref={btnRef}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button onClick={()=> btnRef.current.style.display="none"
        }>change me</button>

        <button onClick={()=>btnRef.current.style.display="block"}>restore me</button>

      </section>

      {/* // custome button */}

      
    </>
  )
}

export default App
