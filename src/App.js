//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//import { useEffect, React, useState } from "react";
//import "./styles.css";

// export default function App() {
//   const [isActivated, setIsActivated] = useState(false);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     let intervalID;

//     if (isActivated) {
//       intervalID = setInterval(() => {
//         setTimer((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalID);
//     }
//     return () => clearInterval(intervalID);
//   }, [isActivated]);

//   const startStop = () => {
//     setIsActivated((prevIsActivated) => !prevIsActivated);
//   };

//   const reset = () => {
//     setIsActivated(false);
//     setTimer(0);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${
//       remainingSeconds < 10 ? "0" : ""
//     }${remainingSeconds}`;
//   };

//   return (
//     <div className="App">
//       <h1>Stopwatch</h1>
//       <p> Time : {formatTime(timer)}</p>
//       <div className='button'>
//        <button onClick={startStop}>{isActivated ? "Stop" : "Start"}</button>
//        <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); // Cleanup the interval on unmount
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
