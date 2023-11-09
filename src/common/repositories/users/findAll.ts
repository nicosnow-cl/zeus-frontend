import { getConnection } from '@/common/repositories/mongo'
import { TPaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type TFindAllProps = {
  page?: number | string
  limit?: number | string
  filters?: {
    name?: string
  }
}

export async function findAll({
  filters,
  page = 0,
  limit = 10,
}: TFindAllProps | undefined = {}): Promise<TPaginatedResponse<UserCardEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection<UserCardEntity>('cards')

    const query: any = {}
    if (filters) {
      const { name } = filters

      // if (appareance?.length) query.appearance = { $in: appareance };
      if (name) query.name = { $regex: name, $options: 'i' }
      // if (promotion) query.hasPromo = true;
      // if (services?.length) query.services = { $in: services };
      // if (type) query.type = type;
      // if (video) query.videos = { $exists: true, $not: { $size: 0 } };
    }

    let skip = 0
    let limitTo = 10

    if (page) skip = Number(page) * Number(limit)

    const data = await collection
      .find(query)
      .skip(skip)
      .limit(limitTo)
      .sort([
        ['type', -1],
        ['returnAt', -1],
      ])
      .toArray()

    const dataCount = await collection.countDocuments(query)
    const metadata = {
      limit: Number(limit),
      page: Number(page),
      total: dataCount,
      totalPages: Math.ceil(dataCount / Number(limit)),
    }

    return JSON.parse(
      JSON.stringify({
        status: 'success',
        data,
        metadata,
      })
    )

    // return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err)

    return {
      status: 'error',
      error: err.message || 'Error inesperado',
    }
  } finally {
    await closeConnection()
  }
}
