import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greetings from './components/Hero.jsx'
import Event from './components/Event.jsx'
import Click from './components/Click.jsx'
import ButtonLoger from './components/Anomim.jsx'
import BtnLogger from './components/Anonim_remake.jsx'
import TogleBtn from './components/TogleBtn.jsx'
function App() {

  return (
    <>
      <Greetings name="Mango"/>
      <Event/>
      <Click/>
      <ButtonLoger/>
      <BtnLogger/>
      <TogleBtn/>
    </>
  )
}

export default App
