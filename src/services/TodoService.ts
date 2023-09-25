import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	isAxiosError
} from 'axios'
import appConfig from '@/config/app.config'

export interface ITodoResponse {
	userId: number
	id: number
	title: string
	completed: boolean
}

export interface ITodoClient {
	getListTodo(): Promise<ITodoResponse[]>;
	getTodoDetail(id: number): Promise<ITodoResponse>;
}

export class TodoClient implements ITodoClient {
	private readonly instance: AxiosInstance
	private readonly baseUrl: string

	constructor(baseUrl?: string, instance?: AxiosInstance) {
		this.instance = instance ? instance : axios.create()
		this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : appConfig.baseURL as string
	}

	async getListTodo(): Promise<ITodoResponse[]> {
		const axiosConfig: AxiosRequestConfig = {
			method: 'GET',
			url: `${this.baseUrl}/todos`
		}
		try {
			const _response = await this.instance
				.request(axiosConfig)
			return _response.data as ITodoResponse[]
		} catch(_error) {
			if(isAxiosError(_error) && _error.response) {
				throw _error.response.data
			} else {
				throw _error
			}
		}
	}

	async getTodoDetail(id: number): Promise<ITodoResponse> {
		const axiosConfig: AxiosRequestConfig = {
			method: 'GET',
			url: `${this.baseUrl}/todos/${id}`
		}
		return this.instance
			.request(axiosConfig)
			.then((_response: AxiosResponse) => {
				return _response.data as ITodoResponse
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

export const todoClient = new TodoClient()