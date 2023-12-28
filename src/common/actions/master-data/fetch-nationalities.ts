'use server'

import { TResponse } from '../../types/misc/response.type'

export const actionFetchNationalities = async (): Promise<TResponse<string>> => {
  const nationalities = require('../../../../dummy/nationalities.json')

  return {
    status: 'success',
    data: nationalities,
  }
}
