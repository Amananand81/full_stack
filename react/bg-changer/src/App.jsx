// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import { useState } from "react"

function App() {
  // hooks use state...
  const [color,setColor]=useState("olive")

  return (
    <>
       <div className='flex justify-center py-5 bg-black text-white'>
          <h1 className='text-4xl text-bold '>tailwind css with react</h1>
       </div>

       <div className="w-full h-screen duration-200 " 
       style={{backgroundColor : color}}>
          <div classNae="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 text-white rounded-3xl">
              <button
              onClick={()=>setColor('red')}
              className="py-1 px-7 rounded-2xl" style={{backgroundColor : 'red'}}>red</button>
              <button
              onClick={()=>setColor('green')}
              className="py-1 px-7 rounded-2xl" style={{backgroundColor : 'green'}}>green</button>
              <button
              onClick={()=>setColor('black')}
              className="py-1 px-7 rounded-2xl" style={{backgroundColor : 'black'}}>red</button>
              <button
              onClick={()=>setColor('purple')}
              className="py-1 px-7 rounded-2xl" style={{backgroundColor : 'purple'}}>purple</button>
              <button 
              onClick={()=>setColor('pink')}
              className="py-1 px-7 rounded-2xl" style={{backgroundColor : 'pink'}}>pink</button>
            </div>
          </div>
       </div>
    </>
  )
}

export default App