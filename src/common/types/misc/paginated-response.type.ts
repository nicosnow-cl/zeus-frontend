import { PaginatedMetadata } from './paginated-metadata.type'

export type SuccessPaginatedResponse<T> = {
  status: 'success'
  data: T[]
  metadata: PaginatedMetadata
}

export type ErrorPaginatedResponse = {
  status: 'error'
  error: string
}

export type PaginatedResponse<T> = SuccessPaginatedResponse<T> | ErrorPaginatedResponse
