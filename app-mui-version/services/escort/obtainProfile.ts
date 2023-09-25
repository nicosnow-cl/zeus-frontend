import { ObjectId } from 'mongodb';

// import IProfile from '../../interfaces/states/interface.profile';
import getConnection from '../../pages/api/mongo';

const obtainProfile = async (match: string) => {
  const { db, closeConnection } = await getConnection();

  try {
    const collection = db.collection<any>('escorts');
    const query =
      ObjectId.isValid(match) && match.length === 24
        ? { _id: new ObjectId(match) }
        : { username: match };

    const data = await collection.findOne(query);

    return data ? JSON.stringify(data) : null;
  } catch (err: any) {
    console.error(err);

    return null;
  } finally {
    await closeConnection();
  }
};

export default obtainProfile;
