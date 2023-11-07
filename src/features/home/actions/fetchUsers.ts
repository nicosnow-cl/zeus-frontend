'use server'

import { findAll } from '@/common/repositories/users/findAll'
import sleep from '@lib/sleep'

export type TFetchUsersProps = {
  page?: string | number
  limit?: string | number
}

export const fetchUsers = async ({ page = 0, limit = 10 }: TFetchUsersProps | undefined = {}) => {
  await sleep(1000)
  return await findAll({ page, limit })
}
