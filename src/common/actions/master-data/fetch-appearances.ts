'use server'

import { appearancesFindAll } from '../../repositories/masters/appearances-find-all'
import { TAppearanceEntity } from '../../types/entities/appearance-entity.type'
import { Response } from '../../types/misc/response.type'

export const actionFetchAppearances = async (): Promise<Response<TAppearanceEntity>> =>
  appearancesFindAll()
