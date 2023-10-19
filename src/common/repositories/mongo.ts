import * as mongoDB from 'mongodb'

const URI =
  'mongodb+srv://admin:esperanza18@guiza-dev.rdi11bq.mongodb.net/?retryWrites=true&w=majority'
const DB_NAME = 'guiza-dev'

export const getConnection = async (dbName = DB_NAME) => {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(URI)

  await client.connect()

  const db: mongoDB.Db = client.db(dbName)

  return { db, closeConnection: () => client.close() }
}
