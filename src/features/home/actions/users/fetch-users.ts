'use server'

import { findAll } from '@/common/repositories/users/findAll'
import { searchParamsToFindAllProps } from '../../mappers/params-to-find-all-props'
import { PaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { TSearchParams } from '@/common/types/misc/search-params.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export const fetchUsers = async (
  searchParams?: TSearchParams
): Promise<PaginatedResponse<UserCardEntity>> => {
  const { page, limit, query } = searchParamsToFindAllProps(searchParams)

  return await findAll({ page, limit, query })
}
