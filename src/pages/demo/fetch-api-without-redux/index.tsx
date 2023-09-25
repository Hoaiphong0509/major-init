import { FC, useEffect, useState } from 'react'
import PostContainer from '@/common/containers/posts/PostContainer'
import LoadingView from '@/common/shared/LoadingView'
import HeaderDemo from '@/common/shared/HeaderDemo'
import { IPostResponse, postClient } from '@/services/PostService'
import { delay } from '@/helper'


interface FetchApiWithoutReduxPageProps {}

const FetchApiWithoutReduxPage: FC<FetchApiWithoutReduxPageProps> = () => {
	console.log('Render')

	const [posts, setPosts] = useState<IPostResponse[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const fetchPost = async () => {
		setIsLoading(true)
		console.log('Fetching data...🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️')
		await delay(2000)
		const response = await postClient.getListPost()
		setPosts(() => response)
		setIsLoading(false)
	}

	useEffect(() => {
		console.log('Component mounted')
		fetchPost()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if(isLoading) {
		console.log('Loading...⏳⏳⏳')
		return <LoadingView/>
	}

	return (
		<div className='flex flex-col items-center'>
			<HeaderDemo title='Fetch API Without Redux 😶😶😶'/>
			<div className='mt-10'>
				<PostContainer
					posts={posts}
					type='without-redux'/>
			</div>
		</div>
	)
}

export default FetchApiWithoutReduxPage