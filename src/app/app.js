import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/persistState.js";
import { throttle } from "lodash";

import timersReducer from '../features/timers/timersSlice.js';
import { update } from '../features/timers/timersSlice.js';

export const store = configureStore({
	reducer: {
		timers: timersReducer
	},
  preloadedState: loadState()
})

let lastUpdateTime = Date.now()

setInterval(() => {
	const now = Date.now()
	const deltaTime = now - lastUpdateTime
	lastUpdateTime = now
	store.dispatch(update(deltaTime))
}, 100)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));
