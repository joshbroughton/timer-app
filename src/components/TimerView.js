export default function TimerView({ timer }) {
  return(
    <div>
      <h2>{timer.name}</h2>
      <h1>{timer.time}</h1>
      <button>Start</button>
    </div>
  )
}
