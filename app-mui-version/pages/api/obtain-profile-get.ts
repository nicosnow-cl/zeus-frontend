import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import getConnection from './mongo';
// import IProfile from '../../interfaces/states/interface.profile';
import IResponse from '../../interfaces/api/interface.response';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: { id: string };
}

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<IResponse>) {
  const { db, closeConnection } = await getConnection();

  try {
    const { id } = req.query;
    const collection = db.collection<any>('escorts');

    const data = await collection.findOne({ _id: new ObjectId(id) });

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
