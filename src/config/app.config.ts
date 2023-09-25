import { API_URL } from '@/constants/app.constant'

const appSetting = () => {
  return {
    authenticatedEntryPath: '/',
    unAuthenticatedEntryPath: '/login',
    baseURL: API_URL,
  }
}
const appConfig = appSetting()

export default appConfig
