import { FC, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { IPostResponse, postClient } from '@/services/PostService'
import HeaderDemo from '@/common/shared/HeaderDemo'
import PostContainer from '@/common/containers/posts/PostContainer'
import { delay } from '@/helper'
import LoadingView from '@/common/shared/LoadingView'

interface FetchApiWithTanStackPageProps {}

const FetchApiWithTanStackPage: FC<FetchApiWithTanStackPageProps> = () => {
	console.log('Render')
	const {isLoading, error, data} = useQuery<IPostResponse[]>({
		queryKey: ['postsList'],
		queryFn: async () => {
			console.log('Fetching data...🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️')
			await delay(2000)
			// throw new Error('hehe')
			return await postClient.getListPost()
		},
		retry: false
	})

	useEffect(() => {
		console.log('Component mounted')
	}, [])

	if(isLoading) {
		console.log('Loading...⏳⏳⏳')
		return <LoadingView/>
	}
	if(error) return `An error has occurred: ${error}`

	return (
		<div className='flex flex-col items-center'>
			<HeaderDemo title='Fetch API With TanStack ⚛️'/>
			<div className='mt-10'>
				<PostContainer
					posts={data ?? []}
					type='with-tan-stack'/>
			</div>
		</div>
	)
}

export default FetchApiWithTanStackPage