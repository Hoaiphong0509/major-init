import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	isAxiosError
} from 'axios'
import appConfig from '@/config/app.config'

export interface IPostResponse {
	userId: number
	id: number
	title: string
	body: string
}

export interface IPostClient {
	getListPost(): Promise<IPostResponse[]>;
	getPostDetail(id: number): Promise<IPostResponse>;
}

export class PostClient implements IPostClient {
	private readonly instance: AxiosInstance
	private readonly baseUrl: string

	constructor(baseUrl?: string, instance?: AxiosInstance) {
		this.instance = instance ? instance : axios.create()
		this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : appConfig.baseURL as string
	}

	async getListPost(): Promise<IPostResponse[]> {
		const axiosConfig: AxiosRequestConfig = {
			method: 'GET',
			url: `${this.baseUrl}/posts`
		}
		try {
			const _response = await this.instance
				.request(axiosConfig)
			console.log('Done✅')
			console.log('Data: ', _response.data)
			return _response.data as IPostResponse[]
		} catch(_error) {
			if(isAxiosError(_error) && _error.response) {
				throw _error.response.data
			} else {
				throw _error
			}
		}
	}

	async getPostDetail(id: number): Promise<IPostResponse> {
		const axiosConfig: AxiosRequestConfig = {
			method: 'GET',
			url: `${this.baseUrl}/posts/${id}`
		}
		return this.instance
			.request(axiosConfig)
			.then((_response: AxiosResponse) => {
				return _response.data as IPostResponse
			})
			.catch((_error: any) => {
				if(isAxiosError(_error) && _error.response) {
					throw _error.response.data
				} else {
					throw _error
				}
			})
	}
}

export const postClient = new PostClient()