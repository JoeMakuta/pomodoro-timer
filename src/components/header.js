
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function decrement(toDecrement) {
   return toDecrement - 1;
}
function increment(toIncrement) {
   return toIncrement + 1;
}

function Header(props) {
   const [breakL, setBreakL] = useState(5)
   const [sessionL, setSessionL] = useState(25)
   return (
      <div id="top_header">
         <div>
            <p id="break-label">Break Lenght</p>
            <div>
               <span id="break-decrement" onClick={() => setBreakL(decrement(breakL))}><FaArrowDown color="white" size={40} /></span>
               <span id="break-length">{breakL}</span>
               <span id="break-increment" onClick={() => setBreakL(increment(breakL))}><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

         <div>
            <p id="session-label">Session Lenght</p>
            <div>
               <span id="session-decrement" onClick={() => setSessionL(decrement(sessionL))}><FaArrowDown color="white" size={40} /></span>
               <span id="session-length">{sessionL}</span>
               <span id="session-increment" onClick={() => setSessionL(increment(sessionL))}><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>
      </div>
   )
}


export default Header