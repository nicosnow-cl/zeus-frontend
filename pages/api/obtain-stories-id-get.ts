import type { NextApiRequest, NextApiResponse } from 'next';

import getConnection from './mongo';
import IResponse from '../../interfaces/api/interface.response';
import IStory from '../../interfaces/states/interface.story';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: { id: string };
}

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<IResponse>) {
  const { db, closeConnection } = await getConnection();

  try {
    const { id } = req.query;
    const collection = db.collection<IStory>('stories');

    const data = await collection.findOne({ escortId: id });

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
