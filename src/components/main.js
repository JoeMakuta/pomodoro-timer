
import { useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle, FaUndo } from 'react-icons/fa'


function Main(props) {
  

   return (
      <div >
         <h1 id="timer-label">Session</h1>
         <div id="time-left"><h2>{25}:{"0".toString().padStart(2, 0)}</h2></div>
         <div>
            <span id="start_button" >
               <FaRegPlayCircle color="white" size={40} /></span>
            <span id="stop_button"><FaRegPauseCircle color="white" size={40} /></span>
            <span id="stop_button"><FaUndo color="white" size={40} /></span>

         </div>
      </div >

   )
}

export default Main