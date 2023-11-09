import { TPaginatedMetadata } from './paginated-metadata.type'

export type TSuccessPaginatedResponse<T> = {
  status: 'success'
  data: T[]
  metadata: TPaginatedMetadata
}

export type TErrorPaginatedResponse = {
  status: 'error'
  error: string
}

export type TPaginatedResponse<T> = TSuccessPaginatedResponse<T> | TErrorPaginatedResponse
