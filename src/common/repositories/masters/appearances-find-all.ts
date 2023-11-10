import { getConnection } from '@/common/repositories/mongo'
import { TAppearanceEntity } from '@/common/types/entities/appearance-entity.type'
import { TResponse } from '@/common/types/misc/response.type'

export async function appearancesFindAll(): Promise<TResponse<TAppearanceEntity>> {
  const { db, closeConnection } = await getConnection()

  try {
    const collection = db.collection('appearances')

    const data = await collection.find().sort(['value', 1]).toArray()

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
  } finally {
    await closeConnection()
  }
}