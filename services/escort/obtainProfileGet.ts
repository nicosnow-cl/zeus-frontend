import api from '..';
import IProfile from '../../interfaces/states/interface.profile';

const obtainProfileGet = async (id: string): Promise<IProfile | undefined> => {
  try {
    const response = await api.get(`/obtain-profile-get?id=${id}`);
    const { data: result } = response;

    if (!result.success) {
      console.error(result.error);
      return undefined;
    }

    return result.data;
  } catch (err: any) {
    console.error(err);

    return undefined;
  }
};

export default obtainProfileGet;
