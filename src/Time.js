import React from 'react';

const Time = ({time, noMilliseconds}) => {
    const displayTime00 = time =>
    time.toString().length === 1 ? "0" + time : time;
  const displayTime000 = time =>
    time.toString().length === 2 ? "0" + time : 0 + displayTime00(time);
  return (
    <>
      {
        time
        ? displayTime00(time.hours()) +
          ":" +
          displayTime00(time.minutes()) +
          ":" +
          displayTime00(time.seconds()) +
          (
            noMilliseconds ? '' : (
              ":" +
              displayTime000(time.milliseconds())
            )
          )
        : "00:00:00:000"
      }
      </>
  );
};

Time.defaultProps = {
  noMilliseconds: false,
};

export default Time;
