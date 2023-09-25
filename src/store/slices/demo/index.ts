import { combineReducers } from '@reduxjs/toolkit'
import post, { PostState } from './postSlice'
import todo, { TodoState } from './todoSlice'

const reducer = combineReducers({
	post,
	todo
})

export type DemoState = {
	post: PostState
	todo: TodoState
}

export * from './postSlice'
export * from './todoSlice'

export default reducer
