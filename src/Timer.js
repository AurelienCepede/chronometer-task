import React, { useState } from "react";
import moment from "moment";
import TimerTime from "./TimerTime";
import Time from "./Time";

const Timer = () => {
  /* Displayed time */
  const [time, setTime] = useState(moment.duration(0));
  /* Date when the timer start */
  const [beginTime, setBeginTime] = useState(false);
  /* Store the time when the timer is stopped */
  const [oldDuration, setOldDuration] = useState(moment.duration(0));

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [times, setTimes] = useState([]);

  const refreshTime = t =>
    setTime(
      moment
        .duration(0)
        .add(moment.duration(t ? moment().diff(moment(t)) : moment.duration(0)))
    );

  const start = () => {
    addTask();
    if (beginTime) {
      reset();
    }
    setBeginTime(moment().add(oldDuration));
    setOldDuration(moment.duration(0));
  };
  const stop = () => {
    setOldDuration(moment.duration(0).subtract(moment.duration(time)));
    setBeginTime(false);
  };
  const reset = () => {
    setTime(moment.duration(0));
    stop();
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      if (time.asMilliseconds() !== 0){
        setTimes([...times, time]);
      }
      setTask('');
    }
  };

  return (
    <>
      <div className="black-panel">
        <div className="Timer-time">
          <TimerTime
            time={time}
            beginTime={beginTime}
            handleRefreshTime={refreshTime}
          />
        </div>
        <div className="Timer-New-Task">
          <input
            type="text"
            placeholder="Nouvelle tâche"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
        </div>
      </div>
      <div className="black-panel">
        <ul className="Task-list">
          {
            tasks.map((el, i) => (
              <li key={i}>{el}{ times[i] ? (<> - <Time time={times[i]} noMilliseconds /></>) : '' }</li>
              )).reverse()
          }
        </ul>
      </div>
      <div className="Timer-buttons">
        <button onClick={() => start()}>
          <i className="fas fa-play" />
        </button>
        <button onClick={() => stop()}>
          <i className="fas fa-pause" />
        </button>
      </div>
    </>
  );
};

export default Timer;
