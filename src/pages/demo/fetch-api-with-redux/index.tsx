import { FC, useEffect } from 'react'
import {
	AppThunkDispatch,
	BaseState, CommonState,
	DemoState,
	getPostListThunk, POST_LIST_THUNK,
	PostState,
	RootState,
	useAppDispatch,
	useAppSelector
} from '@/store'
import PostContainer from '@/common/containers/posts/PostContainer'
import LoadingView from '@/common/shared/LoadingView'
import HeaderDemo from '@/common/shared/HeaderDemo'
import { delay } from '@/helper'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { selectLoading } from '@/store/slices/ui'

interface FetchApiWithReduxPageProps {}

const FetchApiWithReduxPage: FC<FetchApiWithReduxPageProps> = () => {
	console.log('Render')
	const dispatch = useAppDispatch()
	// const dispatch = useDispatch<ThunkDispatch<PostState, any, AnyAction>>()

	// const {posts, loading: loadingPost} = useAppSelector(state => state.demo.post)
	const {posts, loading: loadingPost} = useSelector((state: RootState) => state.demo.post)
	// const loadingPost2 = useSelector(state => selectLoading(state, POST_LIST_THUNK))

	const fetchPost = async () => {
		console.log('Fetching data...🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️')
		await delay(2000)
		await dispatch(getPostListThunk())
	}

	useEffect(() => {
		fetchPost()
		console.log('Component mounted')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if(loadingPost) {
		console.log('Loading...⏳⏳⏳')
		return <LoadingView/>
	}

	return (
		<div className='flex flex-col items-center'>
			<HeaderDemo title='Fetch API With Redux 🚀🚀🚀'/>
			<div className='mt-10'>
				<PostContainer
					posts={posts}
					type='without-redux'/>
			</div>
		</div>
	)
}

export default FetchApiWithReduxPage