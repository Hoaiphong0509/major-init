import { FC } from 'react'

interface HeaderDemoProps {
	title: string
}

const HeaderDemo: FC<HeaderDemoProps> = (props) => {
	return <h1 className='text-5xl text-center sticky top-0 p-5 w-screen bg-white z-40'>{props.title}</h1>
}

export default HeaderDemo