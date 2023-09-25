// ** React Imports
import React from 'react'
import { useRouter } from 'next/router'
import HeaderDemo from '@/common/shared/HeaderDemo'

const pages_demo = [
	{
		title: 'Multi languages 📖',
		url: '/demo/multi-languages'
	},
	{
		title: 'Fetch API With Redux 🚀',
		url: '/demo/fetch-api-with-redux'
	},
	{
		title: 'Fetch API Without Redux 😶',
		url: '/demo/fetch-api-without-redux'
	},
	{
		title: 'Fetch API With TanStack ⚛️',
		url: '/demo/fetch-api-tan-stack'
	},
	{
		title: 'Dynamic Color Tailwind Component 🎇',
		url: '/demo/color-components'
	}
]

const LandingContainer = () => {
	const router = useRouter()
	const handleClick = (url: string) => {
		router.push(url)
	}

	return (
		<section className=''>
			<HeaderDemo title='Demo init source'/>
			<div className='flex space-x-2 space-y-2 flex-wrap justify-center items-baseline'>
				{pages_demo.map((page, index) => {
					return (
						<button
							onClick={() => handleClick(page.url)}
							key={index}
							className='rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300'>
							{page?.title}
						</button>
					)
				})}
			</div>
		</section>
	)
}

export default LandingContainer

LandingContainer.propTypes = {}
