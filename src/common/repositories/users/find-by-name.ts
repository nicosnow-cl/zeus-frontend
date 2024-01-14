import { Filter } from 'mongodb'

import { getConnection } from '@/common/repositories/mongo'
import { Response } from '@/common/types/misc/response.type'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type FindByNameProps = {
  exact?: boolean
  limit?: number | string
  name: string
}

export async function findByName({
  exact,
  name,
  limit = 5,
}: FindByNameProps): Promise<Response<UserCardEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection<UserCardEntity>('cards')

    const filter: Filter<UserCardEntity> = {
      name: exact ? { $regex: new RegExp(name, 'i') } : { $regex: new RegExp(`^${name}`, 'i') },
    }

    const data = exact
      ? await collection.findOne(filter)
      : await collection.find(filter).limit(Number(limit)).toArray()

    await closeConnection()

    return JSON.parse(
      JSON.stringify({
        status: 'success',
        data: exact ? [data] : data,
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
