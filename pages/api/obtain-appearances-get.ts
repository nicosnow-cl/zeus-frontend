import type { NextApiRequest, NextApiResponse } from 'next';

import getConnection from './mongo';
import IResponse from '../../interfaces/api/interface.response';

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const { db, closeConnection } = await getConnection();

  try {
    const collection = db.collection('appearances');

    const data = await collection.find({}).toArray();

    return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err);

    return res.status(200).json({
      data: [],
      error: { code: -1, message: err.message || 'Error inesperado' },
      success: false,
    });
  } finally {
    await closeConnection();
  }
}

export default handler;
