import React from 'react'
import { useSelector } from 'react-redux'

import TimerView from './TimerView';

export default function ListTimers() {
	const timers = useSelector(state => state.timers.value);
  console.log(timers)

	return (
		<div>
			{timers.map((timer, i) => {
				return (
					<TimerView timer={timer} />
				)
			})}
		</div>

	)
}
