import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  return (
    <>
      <h1>Hello world!</h1>
      <p>Jokes:{jokes.length+1}</p>

      {
        jokes.map((jokes) => (
          <div key={jokes.id}>

            <h3>{jokes.title}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
