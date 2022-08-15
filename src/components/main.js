
import { useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle, FaUndo } from 'react-icons/fa'


function Main(props) {

   const [sessionL, setSessionL] = useState(props.sessionL)
   return (
      <div >
         <h1 id="timer-label">Session</h1>
         <div id="time-left"><h2>{sessionL}:00</h2></div>
         <div>
            <span id="start_button"><FaRegPlayCircle color="white" size={40} /></span>
            <span id="stop_button"><FaRegPauseCircle color="white" size={40} /></span>
            <span id="stop_button"><FaUndo color="white" size={40} /></span>

         </div>
      </div>

   )
}

export default Main