const formatTime = (time) => {
  const totalSeconds = time / 1000;
  const totalMinutes = totalSeconds / 60;
  const totalHours = totalMinutes / 60;

  const secondsRounded = Math.floor(totalSeconds);
  const minutesRounded = Math.floor(totalMinutes);
  const hoursRounded = Math.floor(totalHours);

  const seconds = secondsRounded % 60;
  const minutes = minutesRounded % 60;
  const hours = hoursRounded % 60;

  return(`${hours}:${minutes}:${seconds}`)
}

export { formatTime };
