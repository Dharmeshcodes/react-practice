import { useState ,useEffect,useRef,useMemo,useCallback,useContext} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React from "react"
import { createContext } from 'react'
import ReactMemo from "./hooks/react-memo"


 function App(){

  

  return(
    <div>
      
      <ReactMemo/>
     
    </div>
  )
  }
export default App
