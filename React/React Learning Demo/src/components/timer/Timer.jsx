import { useState, useEffect, useCallback } from 'react';
import './Timer.css';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.start);

  const resetTimer = useCallback(() => {
    setSeconds(props.start);
  }, [props.start]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds >= 200) {
          resetTimer();
          return props.start;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [props.start, resetTimer]);


  return (
    <div className='divTimer'>
      <div className='seconds'><h2 className='timer'>Timer: {seconds}s</h2>
        <button className='btnReset' onClick={resetTimer}>Reset</button></div>
    </div>
  );

};

export default Timer;

