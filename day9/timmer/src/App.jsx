import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null); // Reference for the input box
  const timerRef = useRef(null); // Reference for the timer
  const [timeLeft, setTimeLeft] = useState(10); // State for the countdown timer
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State for timer status

  // Auto-focus the input box on page load
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Start Timer
  const startTimer = () => {
    if (isTimerRunning) return; // Prevent multiple timers
    setIsTimerRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          setIsTimerRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Stop Timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(10);
    setIsTimerRunning(false);
  };

  // Focus the input box
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Magical Timer and Input Box</h1>

      {/* Input Box Section */}
      <div className="input-section">
        <input
          type="text"
          ref={inputRef}
          placeholder="Type something..."
        />
        <button onClick={focusInput}>Focus Box</button>
      </div>

      {/* Timer Section */}
      <div className="timer-section">
        <h2>Timer: {timeLeft > 0 ? `${timeLeft}s` : <span className="times-up">Time's Up!</span>}</h2>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
};

export default App;
