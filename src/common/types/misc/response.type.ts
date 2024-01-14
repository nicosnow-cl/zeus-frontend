export type SuccessResponse<T> = {
  status: 'success'
  data: T[] | (T | null)
}

export type ErrorResponse = {
  status: 'error'
  error: string
}

export type Response<T> = SuccessResponse<T> | ErrorResponse
