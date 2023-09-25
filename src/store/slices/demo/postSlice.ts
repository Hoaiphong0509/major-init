import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { IPostResponse, postClient } from '@/services/PostService'

export type PostState = {
	loading: boolean
	posts: IPostResponse[]
	postDetail: IPostResponse | null
}

const initialState: PostState = {
	loading: true,
	posts: [],
	postDetail: null
}

export const POST_LIST_THUNK = SLICE_BASE_NAME + '/getPostList'
export const getPostListThunk = createAsyncThunk(POST_LIST_THUNK,
	async () => {
		return await postClient.getListPost()
	}
)

export const POST_DETAIL_THUNK = SLICE_BASE_NAME + '/getPostDetail'
export const getPostDetailThunk = createAsyncThunk(POST_DETAIL_THUNK,
	async (payload: number) => {
		return await postClient.getPostDetail(payload)
	}
)

export const postSlice = createSlice({
	name: `${SLICE_BASE_NAME}/post`,
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPostListThunk.fulfilled, (state, action) => {
			state.posts = action.payload
			state.loading = false
		})
		builder.addCase(getPostListThunk.rejected, (state) => {
			state.posts = []
			state.loading = false
		})
		builder.addCase(getPostDetailThunk.fulfilled, (state, action) => {
			state.postDetail = action.payload
			state.loading = false
		})
		builder.addCase(getPostDetailThunk.rejected, (state) => {
			state.postDetail = null
			state.loading = false
		})
	}
})

export default postSlice.reducer
