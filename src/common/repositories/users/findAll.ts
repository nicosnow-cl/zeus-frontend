import { Filter } from 'mongodb'

import { getConnection } from '@/common/repositories/mongo'
import { TPaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type FindAllQuery = {
  name?: string
  appearance?: string[]
  services?: string[]
  hasPromo?: boolean
  withVideo?: boolean
}

export type FindAllProps = {
  page?: number | string
  limit?: number | string
  query?: FindAllQuery
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
      const { name, appearance, hasPromo, services, withVideo } = query

      if (name) filter.name = { $regex: name, $options: 'i' }
      if (appearance?.length)
        filter.appearance = { $in: appearance.map((value) => new RegExp(value, 'i')) }
      if (services?.length)
        filter.services = { $in: services.map((value) => new RegExp(value, 'i')) }
      if (hasPromo) filter.hasPromo = true
      if (withVideo) filter.videos = { $exists: true, $not: { $size: 0 } }
      // if (type) query.type = type;
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

    return {
      status: 'error',
      error: err.message || 'Error inesperado',
    }
  }
}
