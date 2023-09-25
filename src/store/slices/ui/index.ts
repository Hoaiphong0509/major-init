import loading from './loadingSlice'
import { combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
	loading
})

export type UiState = {
	loading: NonNullable<unknown>
}
export * from './loadingSlice'
export default reducer


