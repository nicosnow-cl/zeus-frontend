import api from '../';
import IMedia from '../../interfaces/objects/interface.media';

const obtainMediasByIdGet = async (id: string): Promise<IMedia[]> => {
  try {
    const response = await api.get('/obtain-medias-get', { params: { id } });
    const { data: result } = response;

    if (!result.success) {
      console.error(result.error);

      return [];
    }

    return result.data;
  } catch (err: any) {
    console.error(err);

    return [];
  }
};

export default obtainMediasByIdGet;
