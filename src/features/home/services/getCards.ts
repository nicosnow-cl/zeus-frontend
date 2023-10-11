import { getConnection } from '@/common/repositories/mongo';
import { IUserCard } from '../interfaces/objects/user-card.interface';

export async function getCards() {
  const { db, closeConnection } = await getConnection();

  try {
    // const { body: filters } = req;
    const collection = db.collection<IUserCard>('cards');

    const query: any = {};
    // if (filters) {
    //   const { appareance, city, name, promotion, services, type, video } = filters;

    //   if (appareance?.length) query.appearance = { $in: appareance };
    //   if (name) query.name = { $regex: name, $options: 'i' };
    //   if (promotion) query.hasPromo = true;
    //   if (services?.length) query.services = { $in: services };
    //   if (type) query.type = type;
    //   if (video) query.videos = { $exists: true, $not: { $size: 0 } };
    // }

    const data = await collection
      .find(query)
      .sort([
        ['type', -1],
        ['returnAt', -1],
      ])
      .toArray();

    return data.map((card) => JSON.parse(JSON.stringify(card)));

    // return res.status(200).json({ data, error: null, success: true });
  } catch (err: any) {
    console.error(err);

    return [];
    // return res.status(200).json({
    //   data: [],
    //   error: { code: -1, message: err.message || 'Error inesperado' },
    //   success: false,
    // });
  } finally {
    await closeConnection();
  }
}
