import Main from "./main.js"
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { logDOM } from "@testing-library/react";


function increment(toIncrement) {
   return toIncrement++
}
function decrement(toDecrement) {
   return toDecrement--
}


function Header(props) {

   const [breakLenght, setBreakLenght] = useState(10)

   return (
      <div id="top_header">
         <div>
            <p id="break-label">Break Lenght</p>
            <div>
               <span id="break-decrement" onClick={() => { setBreakLenght(decrement(breakLenght)) }}><FaArrowDown color="white" size={40} /></span>
               <span id="break-length">{breakLenght}</span>
               <span id="break-increment"><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

         <div>
            <p id="session-label">Session Lenght</p>
            <div>
               <span id="session-decrement"><FaArrowDown color="white" size={40} /></span>
               <span id="session-length">{25}</span>
               <span id="session-increment"><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

      </div>


   )
}


export default Header