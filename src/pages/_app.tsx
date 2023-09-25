// Import Base
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { NextPage } from 'next'

// Import Libs
import axios from 'axios'
import Cookies from 'js-cookie'
import { isEmpty } from 'lodash'
import NProgress from 'nprogress'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import Constants / Config
import {
	ACCESS_TOKEN_KEY,
	IS_DEVELOPMENT,
	LOCALE_KEY
} from '@/constants/app.constant'
import {
	REQUEST_HEADER_AUTH_KEY,
	REQUEST_HEADER_LOCALE_KEY,
	TOKEN_TYPE
} from '@/constants/api.constant'
import appConfig from '@/config/app.config'

// Import from internal
import { getLocalStorage } from '@/@core/utilities/storage'
import DefaultLayout from '@/layouts/DefaultLayout'
import store from '@/store'

// Import styles css
import 'nprogress/nprogress.css'
import '@/styles/globals.css'


// AXIOS INTERCEPTORS
axios.interceptors.request.use(
	(config) => {
		if(config.baseURL !== appConfig.baseURL) return config
		const accessToken = Cookies.get(ACCESS_TOKEN_KEY) ?? ''
		const locale = getLocalStorage(LOCALE_KEY) ?? ''
		if(!isEmpty(accessToken)) {
			config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`
		}
		config.headers[REQUEST_HEADER_LOCALE_KEY] = locale
		return config
	},
	(error) => {
		if(IS_DEVELOPMENT) {
			console.error(error)
		}
		return Promise.reject(error)
	}
)

type ExtendedAppProps = AppProps & {
	Component: NextPage
}

export default function App({Component, pageProps}: ExtendedAppProps) {
	const queryClient = new QueryClient()

	useEffect(() => {
		const start = () => NProgress.start()
		const done = () => NProgress.done()

		Router.events.on('routeChangeStart', start)
		Router.events.on('routeChangeComplete', done)
		Router.events.on('routeChangeError', done)

		return () => {
			Router.events.off('routeChangeStart', start)
			Router.events.off('routeChangeComplete', done)
			Router.events.off('routeChangeError', done)
		}
	}, [])

	// Get layout
	const getLayout = Component.getLayout ?? ((page) =>
		<DefaultLayout>{page}</DefaultLayout>)
	// const authGuard = Component.authGuard ?? false
	// const guestGuard = Component.guestGuard ?? true

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				{getLayout(<Component {...pageProps} />)}
				<Toaster
					position='top-right'
					toastOptions={{className: 'react-hot-toast'}}
				/>
			</QueryClientProvider>
		</Provider>
	)
}
