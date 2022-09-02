import React, { useState, useContext, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";

export default function Timer() {
  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0)

  let secondsLeftRef = useRef(secondsLeft)
  let isPausedRef = useRef(isPaused)

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    secondsLeftRef.current = settingsInfo.timer * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      } else if (secondsLeftRef.current === 0) {
        setIsPaused(true);
        isPausedRef.current = true;
        return;
      }

      tick()
    }, 100)
    
    return () => clearInterval(interval);
  }, [settingsInfo])

  const totalSeconds = settingsInfo.timer * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100)

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "round",
          textColor: "black",
          pathColor: '#C5E9FD',
          tailColor: "rgba(225, 225, 225, .2)",
        })}
      />
      <div className="timer-btn-container">
        {isPaused ? 
          <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false }}/> 
        : 
          <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true }} /> 
        }
      </div>

      <div>
        <Settings />
      </div>
    </div>
  );
}
