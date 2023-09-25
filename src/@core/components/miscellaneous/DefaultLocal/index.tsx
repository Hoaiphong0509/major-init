import { FC, useEffect } from 'react'
import { getLocalStorage } from '@/@core/utilities/storage'
import { LOCALE_KEY } from '@/constants/app.constant'
import { useRouter } from 'next/router'

interface DefaultLocaleProps {}

const DefaultLocale: FC<DefaultLocaleProps> = () => {
	const locale = getLocalStorage(LOCALE_KEY)
	const {asPath} = useRouter()
	const router = useRouter()

	useEffect(() => {
		if(locale && locale !== 'en') {
			router.push(asPath, asPath, {locale})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locale])

	return <></>
}

export default DefaultLocale