import { Filter } from 'mongodb'

import { getConnection } from '@/common/repositories/mongo'
import { TPaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import sleep from '@lib/sleep'

export type UsersCardsFilters = {
  age: [number, number]
  appearance: string[]
  gender: string[]
  hasPromo: boolean
  name: string
  nationality: string[]
  price: [number, number]
  services: string[]
  type: string[]
  withVideo: boolean
}

export type FindAllProps = {
  page?: number | string
  limit?: number | string
  query?: Partial<UsersCardsFilters>
}

export async function findAll({
  query,
  page = 0,
  limit = 10,
}: FindAllProps | undefined = {}): Promise<TPaginatedResponse<UserCardEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection<UserCardEntity>('cards')

    const filter: Filter<UserCardEntity> = {}

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        switch (key) {
          case 'appearance':
          case 'services':
          case 'nationality':
          case 'type':
            filter[key] = { $in: (value as string[]).map((value) => new RegExp(value, 'i')) }
            break

          case 'withVideo':
            filter[key] = { $exists: true, $not: { $size: 0 } }
            break
          case 'hasPromo':
            filter[key] = true
            break
          case 'name':
            filter[key] = { $regex: value as string, $options: 'i' }
            break
          default:
            break
        }
      }
    }

    console.log({ query, filter })

    let skip = 0
    if (page) skip = Number(page) * Number(limit)

    const data = await collection
      .find(filter)
      .skip(skip)
      .limit(Number(limit))
      .sort([
        ['age', 1],
        ['name', 1],
        ['returnAt', -1],
      ])
      .toArray()

    const dataCount = await collection.countDocuments(filter)
    const metadata = {
      limit: Number(limit),
      page: Number(page),
      total: dataCount,
      totalPages: Math.ceil(dataCount / Number(limit)),
    }

    await closeConnection()

    // await sleep(10000)

    return JSON.parse(
      JSON.stringify({
        status: 'success',
        data,
        metadata,
      })
    )
  } catch (err: any) {
    console.error(err)

    return {
      status: 'error',
      error: err.message || 'Error inesperado',
    }
  }
}
