import { combineReducers, CombinedState, AnyAction, Reducer } from 'redux'

import ui, { UiState } from './slices/ui'
import base, { BaseState } from './slices/base'
import demo, { DemoState } from './slices/demo'

// 👇👇👇 Add State
export type RootState = CombinedState<{
	base: CombinedState<BaseState>
	demo: CombinedState<DemoState>
	ui: CombinedState<UiState>
}>

export interface AsyncReducers {
	[key: string]: Reducer<any, AnyAction>
}

// 👇👇👇 Add reducers/slices
const staticReducers = {
	base,
	demo,
	ui,
}

const rootReducer = (asyncReducers?: AsyncReducers) =>
	(state: RootState, action: AnyAction) => {
		const combinedReducer = combineReducers({
			...staticReducers,
			...asyncReducers
		})
		return combinedReducer(state, action)
	}

export default rootReducer
