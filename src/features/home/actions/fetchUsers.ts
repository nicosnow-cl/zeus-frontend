'use server'

import { findAll } from '@/common/repositories/users/findAll'

export type TFetchUsersProps = {
  page?: string | number
  limit?: string | number
}

export const fetchUsers = async ({ page = 0, limit = 10 }: TFetchUsersProps | undefined = {}) => {
  return await findAll({ page, limit })
}
