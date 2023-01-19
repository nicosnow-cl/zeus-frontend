import api from '../';

const obtainAppearancesGet = async (): Promise<any[]> => {
  try {
    const response = await api.get('/obtain-appearances-get');
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

export default obtainAppearancesGet;
