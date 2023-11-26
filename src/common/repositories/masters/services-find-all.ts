import { getConnection } from '@/common/repositories/mongo'
import { TResponse } from '@/common/types/misc/response.type'
import { TServiceEntity } from '@/common/types/entities/service-entity.type'

export async function servicesFindAll(): Promise<TResponse<TServiceEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection('services')

    const data = await collection.find().sort(['value', 1]).toArray()

    await closeConnection()

    return JSON.parse(
      JSON.stringify({
        status: 'success',
        data,
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
