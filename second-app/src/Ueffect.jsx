import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

  // clean up 
    return () => clearInterval(interval); 
  }, [isRunning]);

  // Start
  const startTimer = () => {
    setIsRunning(true);
  };

  //Pause
  const pauseTimer = () => {
    setIsRunning(false);
  };

  //Resume (same as start)
  const resumeTimer = () => {
    setIsRunning(true);
  };

  //Stop (stop + reset to 0)
  const stopTimer = () => {
    setIsRunning(false);
    setCount(0);
  };

  //Reset (reset but don't start)
  const resetTimer = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;