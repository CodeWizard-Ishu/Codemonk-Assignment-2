import React from 'react';

function CountdownTimer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="countdown-timer">
      <span className="timer">{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span className="timer">{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}

export default CountdownTimer;
