interface IResponse {
  data: any
  error: IError | null
  success: boolean
}

export interface IError {
  code: number
  message: string
}

export default IResponse
