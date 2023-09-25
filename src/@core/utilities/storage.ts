import { IS_SERVER } from '@/constants/app.constant'

const storage = () => {
	if(IS_SERVER) {
		return {
			getItem: () => {},
			setItem: () => {},
			removeItem: () => {},
			clear: () => {}
		}
	}
	return localStorage
}

export const getLocalStorage = (key: string) => {
	return storage().getItem(key)
}

export const setLocalStorage = (key: string, value: string) => {
	return storage().setItem(key, value)
}

export const removeLocalStorage = (key: string) => {
	return storage().removeItem(key)
}

export const clearLocalStorage = () => {
	return storage().clear()
}
