'use server'

import { findByName } from '@/common/repositories/users/find-by-name'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { Response } from '@/common/types/misc/response.type'

export const actionFetchByName = async (name: string): Promise<Response<UserCardEntity>> =>
  findByName({ name })
