import type { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';

import cards from '../../dummy/cards';
import getRandomNumber from '../../helpers/getRandomNumber';
import ICard from '../../interfaces/states/interface.card';
import IPartialFilters from '../../interfaces/objects/interface.partial-filters';
import IResponse from '../../interfaces/api/interface.response';
import sleep from '../../helpers/sleep';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: IPartialFilters;
}

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<IResponse>) {
  try {
    await sleep(getRandomNumber(500, 1500));

    const { body: filters } = req;
    let data: ICard[] = cards;

    if (filters) {
      const { appareance, city, name, promotion, services, type, video } = filters;

      if (type) data = data.filter((card) => card.type === type);
      if (name) {
        const fuse = new Fuse(data, {
          keys: ['name'],
          threshold: 0.2,
        });

        data = fuse.search(name).map((match) => match.item);
      }
      if (video) data = data.filter((card) => card.videos.length);
      if (services?.length)
        data = data.filter((card) => services.some((match) => card.services.includes(match)));
    }

    return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err);

    return res.status(200).json({
      data: [],
      error: { code: -1, message: err.message || 'Error inesperado' },
      success: false,
    });
  }
}

export default handler;
