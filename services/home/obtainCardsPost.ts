import api from '..';
import ICard from '../../interfaces/states/interface.card';
import IPartialFilters from '../../interfaces/objects/interface.partial-filters';

const obtainCardsPost = async (filters?: IPartialFilters): Promise<ICard[]> => {
  try {
    const response = await api.post('/obtain-cards-post', filters);
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

export default obtainCardsPost;
