'use server'

import { servicesFindAll } from '../../repositories/masters/services-find-all'
import { Response } from '../../types/misc/response.type'
import { TServiceEntity } from '../../types/entities/service-entity.type'

export const actionFetchServices = async (): Promise<Response<TServiceEntity>> => servicesFindAll()
