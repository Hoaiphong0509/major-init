import {
	createSlice
} from '@reduxjs/toolkit'
import { getPostListThunk, POST_LIST_THUNK } from '@/store'

const buildLoading = (action, context, builder) => {
	console.log("Context:", context)

	return () => {
		builder?.addCase(action?.pending, (state) => {
			return { ...state, [context]: true }
		})
		builder?.addCase(action?.fulfilled, (state) => {
			return { ...state, [context]: false }
		})
		builder?.addCase(action?.rejected, (state) => {
			return { ...state, [context]: false }
		})
	}
}

export const loadingSlice = createSlice({
	name: 'loading',
	initialState: {},
	reducers: {},
	extraReducers: (builder) => {
		buildLoading(getPostListThunk, POST_LIST_THUNK, builder)
	}
})

export const selectLoading = (state, context) => {
	return state.loading[context] || false
}

export default loadingSlice.reducer