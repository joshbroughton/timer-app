import { useDispatch } from "react-redux";
import { toggleTimer, removeTimer } from "../features/timers/timersSlice";
import { formatTime } from "../utils/utils";
import './TimerView.css';

export default function TimerView({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  return(
    <div className="TimerView">
      <h2>{name}</h2>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={() => dispatch(removeTimer(index))}>Delete</button>
    </div>
  )
}
