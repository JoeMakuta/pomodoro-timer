import Main from "./main.js"
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


function Header({ sessionLenght, breakLenght, setBreakLenght, setSessionLenght }) {

   function decrement(toDecrement) {
      return toDecrement - 1;
   }

   function increment(toIncrement) {
      return toIncrement + 1;
   }

   function stopBreakDecrementation(toStop) {
      if (toStop == 0) {
         return toStop;
      } else {
         return decrement(toStop)
      }
   }


   function stopSessionDecrementation(toStop) {
      if (toStop == 5) {
         return toStop;
      } else {
         return decrement(toStop)
      }
   }

   return (

      <div id="top_header">
         <div>
            <p id="break-label">Break Lenght</p>
            <div>
               <span id="break-decrement" onClick={() => setBreakLenght(stopBreakDecrementation(breakLenght))}><FaArrowDown color="white" size={40} /></span>
               <span id="break-length">{breakLenght}</span>
               <span id="break-increment" onClick={() => setBreakLenght(increment(breakLenght))}><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

         <div>
            <p id="session-label">Session Lenght</p>
            <div>
               <span id="session-decrement" onClick={() => setSessionLenght(stopSessionDecrementation(sessionLenght))}><FaArrowDown color="white" size={40} /></span>
               <span id="session-length">{sessionLenght}</span>
               <span id="session-increment" onClick={() => setSessionLenght(increment(sessionLenght))}><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

      </div>



   )
}


export default Header