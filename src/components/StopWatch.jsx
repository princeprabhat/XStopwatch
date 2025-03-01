import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // if (!isActive) return;

    // let time = setInterval(() => {
    //   setValue({ ...value, sec2: Number(value.sec2) + 1 });
    // }, 1000);
    // if (value.sec2 == 10) {
    //   setValue({ ...value, sec1: Number(value.sec1) + 1, sec2: 0 });
    // }
    // if (value.sec1 == 6) {
    //   setValue({
    //     minute: Number(value.minute) + 1,
    //     sec1: 0,
    //     sec2: 0,
    //   });
    // }

    // return () => clearInterval(time);
    const elTime = setInterval(() => {
      if (!isActive) return;
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(elTime);
  }, [isActive]);

  const toggleButton = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={toggleButton}>{!isActive ? "Start" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
