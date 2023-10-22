import { getConnection } from '@/common/repositories/mongo'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type TFindAllProps = {
  page?: number | string
  limit?: number | string
}

export async function findAll({ page = 0, limit = 10 }: TFindAllProps | undefined = {}) {
  const { db, closeConnection } = await getConnection()

  try {
    // const { body:   } = req;
    const collection = db.collection<UserCardEntity>('cards')

    const query: any = {}
    // if (filters) {
    //   const { appareance, city, name, promotion, services, type, video } = filters;

    //   if (appareance?.length) query.appearance = { $in: appareance };
    //   if (name) query.name = { $regex: name, $options: 'i' };
    //   if (promotion) query.hasPromo = true;
    //   if (services?.length) query.services = { $in: services };
    //   if (type) query.type = type;
    //   if (video) query.videos = { $exists: true, $not: { $size: 0 } };
    // }

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

    // return data.map((card) => JSON.parse(JSON.stringify(card)))
    return JSON.parse(JSON.stringify(data))

    // return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err)

    return []
    // return res.status(200).json({
    //   data: [],
    //   error: { code: -1, message: err.message || 'Error inesperado' },
    //   success: false,
    // });
  } finally {
    await closeConnection()
  }
}
