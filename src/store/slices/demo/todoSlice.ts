import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { ITodoResponse, todoClient } from '@/services/TodoService'

export type TodoState = {
	loading: boolean
	todos: ITodoResponse[]
	todoDetail: ITodoResponse | null
}

const initialState: TodoState = {
	loading: true,
	todos: [],
	todoDetail: null
}

export const TODO_LIST_THUNK = SLICE_BASE_NAME + '/getTodoList'
export const getTodoListThunk = createAsyncThunk(TODO_LIST_THUNK,
	async () => {
		return await todoClient.getListTodo()
	}
)

export const TODO_DETAIL_THUNK = SLICE_BASE_NAME + '/getTodoDetail'
export const getTodoDetailThunk = createAsyncThunk(TODO_DETAIL_THUNK,
	async (payload: number) => {
		return await todoClient.getTodoDetail(payload)
	}
)

export const todoSlice = createSlice({
	name: `${SLICE_BASE_NAME}/todo`,
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getTodoListThunk.fulfilled, (state, action) => {
			state.todos = action.payload
			state.loading = false
		})
		builder.addCase(getTodoListThunk.rejected, (state) => {
			state.todos = []
			state.loading = false
		})
		builder.addCase(getTodoDetailThunk.fulfilled, (state, action) => {
			state.todoDetail = action.payload
			state.loading = false
		})
		builder.addCase(getTodoDetailThunk.rejected, (state) => {
			state.todoDetail = null
			state.loading = false
		})
	}
})

export default todoSlice.reducer
