import api from '..';
import IStory from '../../interfaces/states/interface.story';

const obtainStoriesByIdGet = async (id: string): Promise<IStory | null> => {
  try {
    const response = await api.get('/obtain-stories-id-get', { params: { id } });
    const { data: result } = response;

    if (!result.success) {
      console.error(result.error);

      return null;
    }

    return result.data;
  } catch (err: any) {
    console.error(err);

    return null;
  }
};

export default obtainStoriesByIdGet;
