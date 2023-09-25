import {
	configureStore,
	Reducer,
	AnyAction,
	Store
} from '@reduxjs/toolkit'
import rootReducer, { RootState, AsyncReducers } from './rootReducer'
import reduxLoggerMW from '@/store/middlewares/reduxLogger'

const middlewares: any[] = [reduxLoggerMW]
// const middlewares: any[] = []

interface CustomStore extends Store<RootState, AnyAction> {
	asyncReducers?: AsyncReducers
}

const store: CustomStore = configureStore({
	reducer: rootReducer() as Reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false
		}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development'
})

store.asyncReducers = {}

export type AppDispatch = typeof store.dispatch
export default store
