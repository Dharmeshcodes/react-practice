import { useState ,useEffect,useRef,useMemo,useCallback,useContext} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import React from "react"
import { createContext } from 'react'
import ReactMemo from "./hooks/react-memo"
import {
  UseMemoPractical,
  UseMemoPractical2,
  UseMemoPractical3,
  UseMemoPractical4
} from "./hooks/useMemo";
//alt + z for word wrap in vs code


 function App(){

  
  return(
    <div>
      
      {/* <ReactMemo/> */}
      {/* <UseMemoPractical/>
      <UseMemoPractical2/>
      */}
      {/* <UseMemoPractical3/> */}
      <UseMemoPractical4/>

    </div>
  )
  }
export default App
