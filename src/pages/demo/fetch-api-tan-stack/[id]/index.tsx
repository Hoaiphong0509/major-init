import { FC } from 'react'
import NotFound from 'next/dist/client/components/not-found-error'
import { IPostResponse, postClient } from '@/services/PostService'
import { delay } from '@/helper'
import { useQuery } from '@tanstack/react-query'
import LoadingView from '@/common/shared/LoadingView'
import { useRouter } from 'next/router'

interface PostDetailWithTanStackPageProps {}

const PostDetailWithTanStackPage: FC<PostDetailWithTanStackPageProps> = () => {
	const router = useRouter()
	const {query} = router

	const {isLoading, error, data} = useQuery<IPostResponse>({
		queryKey: ['postsDetail'],
		queryFn: async () => {
			await delay(2000)
			const postId = parseInt(query?.id as string)
			// throw new Error('hehe')
			return await postClient.getPostDetail(postId)
		},
		retry: false
	})

	if(isLoading) return <LoadingView/>
	if(error) return <NotFound/>

	return (
		<div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative'>
			<div className='mb-5 max-w-2xl mx-auto'>
				<h1
					className='text-gray-900 font-bold text-3xl mb-2'>{data?.title.toUpperCase()}</h1>
				<p className='text-gray-700'>{data?.body}</p>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
					<div className=''>
						<h3 className='text-2xl font-bold my-5'>#1. What is Lorem Ipsum?</h3>
						<p className='text-base leading-8 my-5'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<blockquote className='text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>
						<p className='text-base leading-8 my-5'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<a
							href='#'
							className='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'>
							#Election
						</a>, <a
						href='#'
						className='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'>
						#people
					</a>, <a
						href='#'
						className='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'>
						#Election2020
					</a>, <a
						href='#'
						className='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'>
						#trump
					</a>,<a
						href='#'
						className='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'>
						#Joe
					</a>
					</div>

				</div>
			</div>
		</div>
	)
}

export default PostDetailWithTanStackPage