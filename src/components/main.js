
import { useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle, FaUndo } from 'react-icons/fa'

let seconds = 0;
let munites = 0;
let id

function decrementTimer(munite) {
   if (munites == 0 && seconds == 0) {
      munites = munite
   }
   if (munite != 0) {
      if (seconds < 0) {
         munites--
         seconds = 59;
         return seconds--
      } else {
         return seconds--
      }
   } else {
      munites = 5;
      seconds = 0;
   }
}

function Main(props) {
   const [secondsL, setSecondsL] = useState(seconds)
   const [munitesL, setSessionL] = useState(munites)
   return (
      <div >
         <h1 id="timer-label">Session</h1>
         <div id="time-left"><h2>{munitesL}:{secondsL.toString().padStart(2, 0)}</h2></div>
         <div>
            <span id="start_button" onClick={
               () => {
                  id = setInterval(() => { setSecondsL(decrementTimer(props.timerL)); setSessionL(munites) }, 1000)
               }}>
               <FaRegPlayCircle color="white" size={40} /></span>
            <span id="stop_button" onClick={() => {
               clearInterval(id)
            }}><FaRegPauseCircle color="white" size={40} /></span>
            <span id="stop_button"><FaUndo color="white" size={40} /></span>

         </div>
      </div>

   )
}

export default Main