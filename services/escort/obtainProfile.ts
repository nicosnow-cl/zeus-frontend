import { ObjectId } from 'mongodb';

// import IProfile from '../../interfaces/states/interface.profile';
import getConnection from '../../pages/api/mongo';

const obtainProfile = async (id: string) => {
  const { db, closeConnection } = await getConnection();

  try {
    const collection = db.collection<any>('escorts');

    const data = await collection.findOne({ _id: new ObjectId(id) });

    return data ? JSON.stringify(data) : null;
  } catch (err: any) {
    console.error(err);

    return null;
  } finally {
    await closeConnection();
  }
};

export default obtainProfile;
