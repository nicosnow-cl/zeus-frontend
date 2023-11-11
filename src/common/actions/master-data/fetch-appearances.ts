'use server'

import { appearancesFindAll } from '../../repositories/masters/appearances-find-all'
import { TAppearanceEntity } from '../../types/entities/appearance-entity.type'
import { TResponse } from '../../types/misc/response.type'

export const actionFetchAppearances = async (): Promise<TResponse<TAppearanceEntity>> =>
  appearancesFindAll()
