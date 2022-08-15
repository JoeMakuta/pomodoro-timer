
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


function Header() {
   return (
      <div id="top_header">

         <div>
            <p id="break-label">Break Lenght</p>
            <div>
               <span id="break-decrement"><FaArrowDown color="white" size={40} /></span>
               <span id="break-length">5</span>
               <span id="break-increment" ><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>

         <div>
            <p id="session-label">Session Lenght</p>
            <div>
               <span id="session-decrement"><FaArrowDown color="white" size={40} /></span>
               <span id="session-length">5</span>
               <span id="session-increment" ><FaArrowUp color="white" size={40} /></span>
            </div>
         </div>
      </div>
   )
}

export default Header