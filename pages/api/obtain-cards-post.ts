import type { NextApiRequest, NextApiResponse } from 'next';

import getConnection from './mongo';
import ICard from '../../interfaces/states/interface.card';
import IPartialFilters from '../../interfaces/objects/interface.partial-filters';
import IResponse from '../../interfaces/api/interface.response';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: IPartialFilters;
}

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<IResponse>) {
  const { db, closeConnection } = await getConnection();

  try {
    const { body: filters } = req;
    const collection = db.collection<ICard>('cards');

    const query: any = {};
    if (filters) {
      const { appareance, city, name, promotion, services, type, video } = filters;

      if (appareance?.length) query.appareance = { $in: appareance };
      if (name) query.name = { $regex: name, $options: 'i' };
      if (promotion) query.hasPromo = true;
      if (services?.length) query.services = { $in: services };
      if (type) query.type = type;
      if (video) query.videos = { $exists: true, $not: { $size: 0 } };
    }

    const data = await collection.find(query).toArray();

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
