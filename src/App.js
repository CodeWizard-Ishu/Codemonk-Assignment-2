import React, { useState, useEffect } from 'react';
import CountdownTimer from './countdownTimer';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Initial time is 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && !isPaused) {
      intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="container bg-gray-100 rounded-lg shadow-lg p-8 mx-auto w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-6 heading">Countdown Timer</h1>
      <CountdownTimer timeLeft={timeLeft} />
      <div className="flex justify-center mt-8 btn-container">
        {!isActive ? (
          <button className="btn btn-start" onClick={handleStart}>Start</button>
        ) : (
          <>
            {!isPaused ? (
              <button className="btn btn-pause" onClick={handlePause}>Pause</button>
            ) : (
              <button className="btn btn-resume" onClick={handleResume}>Resume</button>
            )}
          </>
        )}
        <button className="btn btn-reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
