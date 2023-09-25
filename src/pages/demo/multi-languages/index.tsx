import { FC } from 'react'
import useTrans from '@/@core/hooks/useTrans'
import { useRouter } from 'next/router'
import { setLocalStorage } from '@/@core/utilities/storage'
import { LOCALE_KEY } from '@/constants/app.constant'

// import { useRouter } from 'next/router'

interface DemoPageProps {}

const DemoPage: FC<DemoPageProps> = () => {
	const trans = useTrans()
	const {asPath} = useRouter()
	const router = useRouter()

	const handleChangeLanguage = (lang: string) => {
		setLocalStorage(LOCALE_KEY, lang)
		router.push(asPath, asPath, {locale: lang})
	}

	return (
		<div className='flex flex-col justify-center items-center bg-amber-50 h-[100vh]'>
			<div className='flex gap-2 mb-4'>
				<button
					className='btn rounded text-3xl px-8 py-2 bg-indigo-400'
					onClick={() => handleChangeLanguage('en')}>English
				</button>
				<button
					className='btn rounded text-3xl px-8 py-2 p-2 bg-teal-400'
					onClick={() => handleChangeLanguage('jp')}>Japanesse
				</button>
			</div>
			<h1 className='text-5xl'>{trans?.greeting}</h1>
		</div>
	)
}

export default DemoPage