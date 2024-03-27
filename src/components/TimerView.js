import { useDispatch } from "react-redux";
import { toggleTimer, removeTimer } from "../features/timers/timersSlice.js";
import { formatTime } from "../utils/utils.js";
import './TimerView.css';

export default function TimerView({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  return(
    <div className="TimerView">
      <h2>{name}</h2>
      <h1>{formatTime(time)}</h1>
      <div className="buttons">
        <button className="button" onClick={() => dispatch(toggleTimer(index))}>{isRunning ? "Stop" : "Start"}</button>
        <button className="button" onClick={() => dispatch(removeTimer(index))}>Delete</button>
      </div>
    </div>
  )
}
