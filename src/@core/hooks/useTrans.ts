import { useRouter } from 'next/router'
import en from '@/i18n/lang/en'
import jp from '@/i18n/lang/jp'

const useTrans = () => {
	const {locale} = useRouter()
	return locale === 'en' ? en : jp
}

export default useTrans
