// hook is used to update ui data at same time in multiple places, if we use normal variable then it will not update the ui data at same time in multiple places. so we use hook to update ui data at same time in multiple places.

import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  const addValue=()=>{
    if(counter < 20){
      setCounter(counter+1)
    // counter+=1
    // console.log(counter)
  
    }
  }

  const subValue=()=>{
      if (counter > 0){
        counter-=1
        setCounter(counter-1)
      }
      
      
    
  }
  return (
    <>
      <h1>Hello, Vite!</h1>

      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value: {counter} </button>


      <button onClick={subValue}>Subtract value: {counter} </button>
    </>
  )
}

export default App
