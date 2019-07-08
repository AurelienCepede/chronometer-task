import React, { useState, useEffect } from "react";
import Time from "./Time";

const TimerTime = ({ time, beginTime, handleRefreshTime }) => {
  const [idInterval, setIdInterval] = useState(false);
  const refreshInterval = () => {
    if (beginTime) {
      setIdInterval(
        setInterval(() => {
          handleRefreshTime(beginTime);
        }, 10)
      );
    }
    return clearInterval(idInterval);
  };

  useEffect(refreshInterval, [beginTime]);

  return (
    <>
      <Time time={time}/>
    </>
  );
};

export default TimerTime;
