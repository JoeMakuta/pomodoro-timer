import Header from "./header"
import { useState } from "react";
import Main from "./main"


import React from "react";
import ReactDOM from 'react-dom/client';
// import App from './components/App.js';

import '../index.css';
function App() {

   const [breakLenght, setBreakLenght] = useState(5)
   const [sessionLenght, setSessionLenght] = useState(25)

   return (
      <>
         <Header sessionLenght={sessionLenght} breakLenght={breakLenght} setSessionLenght={setSessionLenght} setBreakLenght={setBreakLenght} />

         <Main sessionLenght={sessionLenght} breakLenght={breakLenght} setSessionLenght={setSessionLenght} setBreakLenght={setBreakLenght} />

      </>
   )
}

export default App