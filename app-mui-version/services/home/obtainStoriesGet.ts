import api from '../';
import IStory from '../../interfaces/states/interface.story';

const obtainStoriesGet = async (): Promise<IStory[]> => {
  try {
    const response = await api.get('/obtain-stories-get');
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

export default obtainStoriesGet;
