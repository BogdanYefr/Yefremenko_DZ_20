import React, { useEffect } from "react";
import {
  addMinute,
  addSecond,
  resetMinute,
  resetSecond,
  addHour,
  resetHour,
  addSubSecond,
  resetSubSecond,
  resetLaps,
  start,
  stop,
  updateLap
} from "./reducers/actions";
import { useSelector, useDispatch } from "react-redux";
import laps from "./reducers/laps";
import { render } from "react-dom";

const displayNum = (num) => {
  return num < 10 ? `0${num}` : num;
};

let time;

function App() {
  const minute = useSelector((state) => state.minutes);
  const subSecond = useSelector((state) => state.subSeconds);
  const second = useSelector((state) => state.seconds);
  const hour = useSelector((state) => state.hours);
  const timer = useSelector((state) => state.timer);
  const lap = useSelector((state) => state.laps);
  const dispatch = useDispatch();

  function startTimer() {
    return (time = setInterval(() => {
      dispatch(start());
      dispatch(addSubSecond());
    }, 10));
  }

  const addLap = () => {
    const newLap = {
      id: lap.length,
      hour: hour,
      minute: minute,
      second: second,
      subSecond: subSecond
    };
    dispatch(updateLap(newLap));
  };

  const reset = () => {
    dispatch(resetHour());
    dispatch(resetMinute());
    dispatch(resetSecond());
    dispatch(resetSubSecond());
    dispatch(resetLaps());
    clearInterval(time);
    dispatch(stop());
  };

  const pause = () => {
    clearInterval(time);
    dispatch(stop());
  };

  useEffect(() => {
    if (subSecond === 100) {
      dispatch(resetSubSecond());
      dispatch(addSecond());
    }

    if (second === 60) {
      dispatch(addMinute());
      dispatch(resetSecond());
    }

    if (minute === 60) {
      dispatch(addHour());
      dispatch(resetMinute());
    }
  }, [second, subSecond, timer]);

  const renderLaps = lap.map((lap) => (
    <p className="lap" key={lap.id}>
      <span className="lapId">lap {lap.id + 1}</span>&nbsp;&nbsp;
      {lap.hour > 0 ? lap.hour + " : " : null}
      {lap.minute > 0 ? displayNum(lap.minute) + " : " : null}
      {displayNum(lap.second)}&nbsp;.
      <span className="subSecond">{displayNum(lap.subSecond)}</span>
    </p>
  ));

  if (lap > 0) {
    console.log(
      document.getElementsByClassName("lap-div").lastChild.textContent
    );
  }

  return (
    <div>
      <div className="timerFrame">
        <h1>
          {" "}
          {hour > 0 ? hour + " : " : null}
          {minute > 0 ? displayNum(minute) + " : " : null} {displayNum(second)}.
          <span className="subSecond">{displayNum(subSecond)}</span>
        </h1>
      </div>
      {timer ? (
        <div>
          <button onClick={pause}>Pause</button>
          <button onClick={addLap}>Lap</button>
        </div>
      ) : (
        <div>
          <button onClick={startTimer}>Start/Resume</button>
        </div>
      )}
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <div className="lap-div">{renderLaps}</div>
    </div>
  );
}

export default App;
