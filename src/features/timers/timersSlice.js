import { createSlice } from '@reduxjs/toolkit';
import Timer from './Timer';

const initialState = {
  value: []
}

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push(new Timer(action.payload))
    },
    toggleTimer: (state, action) => {
      const index = action.payload;
      const isRunning = state.value[index].isRunning;
			state.value[index] = new Timer(state.value[index].name, state.value[index].time, !isRunning);
		},
  },
})

// Action creators are generated for each case reducer function
export const { addTimer, toggleTimer } = timersSlice.actions

export default timersSlice.reducer;
