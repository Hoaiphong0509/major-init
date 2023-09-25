import { FC } from 'react'
import HeaderDemo from '@/common/shared/HeaderDemo'
import Button from '@/@core/components/ui/Button'
import ButtonDemo from '@/@core/components/ui/ButtonDemo'

interface ColorComponentsPageProps {}

const ColorComponentsPage: FC<ColorComponentsPageProps> = () => {
	return (
		<div className='flex flex-col items-center'>
			<HeaderDemo title='Dynamic Color Tailwind CSS 🎇'/>
			<div className='mt-10 flex gap-2'>
				<Button color='rose'>Button</Button>
				<Button color='purple'>Button</Button>
				<Button color='indigo'>Button</Button>
				<Button color='blue'>Button</Button>
				<Button color='emerald'>Button</Button>
				<Button color='amber'>Button</Button>
			</div>

			<div className='mt-10 flex gap-2'>
				<Button variant="outline" color='rose'>Button</Button>
				<Button variant="outline" color='purple'>Button</Button>
				<Button variant="outline" color='indigo'>Button</Button>
				<Button variant="outline" color='blue'>Button</Button>
				<Button variant="outline" color='emerald'>Button</Button>
				<Button variant="outline" color='amber'>Button</Button>
			</div>

			<div className='mt-10 flex gap-2'>
				<ButtonDemo>Hehe</ButtonDemo>
			</div>
		</div>
	)
}

export default ColorComponentsPage