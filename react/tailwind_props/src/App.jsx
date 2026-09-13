import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  return (
   <>
   <div className='flex justify-center'>
      <h1 className='bg-green-400  text-blue px-26 py-5 mb-5 rounded-xl'>tailwind css test</h1>
    </div>
     <Card username='cat' detiles='hello Cat'/> 
     <Card username='dog' detiles='hello Dog'/>
   </>
    
  )
}

export default App


