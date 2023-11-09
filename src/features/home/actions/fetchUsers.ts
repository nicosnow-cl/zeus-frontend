'use server'

import { TFindAllProps, findAll } from '@/common/repositories/users/findAll'
import { TPaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { TSearchParams } from '@/common/types/misc/search-params.type'
import { searchParamsToFindAllProps } from '../mappers/params-to-find-all-props'

export const fetchUsers = async (
  searchParams?: TSearchParams
): Promise<TPaginatedResponse<UserCardEntity>> => {
  const { page, limit, query } = searchParamsToFindAllProps(searchParams)

  return await findAll({ page, limit, query })
}
