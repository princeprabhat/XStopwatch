import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState({
    minute: 0,
    sec1: 0,
    sec2: 0,
  });

  useEffect(() => {
    if (!isActive) return;

    let time = setInterval(() => {
      setValue({ ...value, sec2: Number(value.sec2) + 1 });
    }, 1000);
    if (value.sec2 == 10) {
      setValue({ ...value, sec1: Number(value.sec1) + 1, sec2: 0 });
    }
    if (value.sec1 == 6) {
      setValue({
        minute: Number(value.minute) + 1,
        sec1: 0,
        sec2: 0,
      });
    }

    return () => clearInterval(time);
  }, [isActive, value]);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setValue({ minute: 0, sec1: 0, sec2: 0 });
    setIsActive(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {value.minute}:{value.sec1}
        {value.sec2}
      </p>
      <button onClick={toggleButton}>{!isActive ? "Start" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
