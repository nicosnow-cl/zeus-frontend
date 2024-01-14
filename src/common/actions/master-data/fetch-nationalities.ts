'use server'

import { Response } from '../../types/misc/response.type'

export const actionFetchNationalities = async (): Promise<Response<string>> => {
  const nationalities = require('../../../../dummy/nationalities.json')

  return {
    status: 'success',
    data: nationalities,
  }
}
