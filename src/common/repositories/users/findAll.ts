import { Filter } from 'mongodb'

import { getConnection } from '@/common/repositories/mongo'
import { PaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

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
}: FindAllProps | undefined = {}): Promise<PaginatedResponse<UserCardEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection<UserCardEntity>('cards')

    const filter: Filter<UserCardEntity> = {}

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        switch (key) {
          case 'age':
            filter[key] = { $gte: (value as number[])[0], $lte: (value as number[])[1] }
            break
          case 'price':
            filter['$expr'] = {
              $or: [
                {
                  $and: [
                    { hasPromo: false },
                    { $gte: ['$price.normal', (value as number[])[0]] },
                    { $lte: ['$price.normal', (value as number[])[1]] },
                  ],
                },
                {
                  $and: [
                    { hasPromo: true },
                    { $gte: ['$price.promo', (value as number[])[0]] },
                    { $lte: ['$price.promo', (value as number[])[1]] },
                  ],
                },
              ],
            }
            break
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

    return JSON.parse(
      JSON.stringify({
        status: 'success',
        data,
        metadata,
      })
    )
  } catch (err: any) {
    console.error(err)

    await closeConnection()

    return {
      status: 'error',
      error: err.message || 'Error inesperado',
    }
  }
}
