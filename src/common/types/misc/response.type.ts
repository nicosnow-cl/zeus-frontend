export type TSuccessResponse<T> = {
  status: 'success'
  data: T[]
}

export type TErrorResponse = {
  status: 'error'
  error: string
}

export type TResponse<T> = TSuccessResponse<T> | TErrorResponse
