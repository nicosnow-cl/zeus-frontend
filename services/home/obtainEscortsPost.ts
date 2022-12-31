import api from '../';
import IEscort from '../../interfaces/states/interface.escort';

import escorts from '../../dummy/escorts';
import sleep from '../../utils/sleep';

const obtainEscortsPost = async (): Promise<IEscort[]> => {
  try {
    await sleep(1000);

    return escorts;
  } catch (err: any) {
    console.error(err);

    return [];
  }
};

export default obtainEscortsPost;
