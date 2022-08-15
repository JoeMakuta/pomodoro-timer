import Header from "./header"
import Main from "./main.js"

import React from "react";
import ReactDOM from 'react-dom/client';
// import App from './components/App.js';

import '../index.css';
function App() {
   return (
      <>
         <Header />
         <Main sessionL={25}></Main>
      </>
   )
}

export default App