import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push({ name: action.payload, time: 0, isRunning: false });
    },
    removeTimer: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning = !state.value[action.payload].isRunning;
		},
    update: (state, action) => {
      state.value.forEach(timer => {
        if (timer.isRunning) {
          timer.time += action.payload
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTimer, removeTimer, toggleTimer, update } = timersSlice.actions

export default timersSlice.reducer;
