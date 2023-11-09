'use server'

import { findAll } from '@/common/repositories/users/findAll'
import { TPaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type TFetchUsersProps = {
  page?: string | number
  limit?: string | number
  filters?: {
    name?: string
  }
}

export const fetchUsers = async ({
  filters,
  page = 0,
  limit = 10,
}: TFetchUsersProps | undefined = {}): Promise<TPaginatedResponse<UserCardEntity>> =>
  findAll({ filters, page, limit })
