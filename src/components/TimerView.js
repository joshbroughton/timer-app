import { useDispatch } from "react-redux";
import { toggleTimer } from "../features/timers/timersSlice";
import Timer from "../features/timers/Timer";
import { formatTime } from "../utils/utils";

export default function TimerView({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  const timer = new Timer(name, time, isRunning)
  return(
    <div>
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>{timer.isRunning ? "Stop" : "Start"}</button>
    </div>
  )
}
