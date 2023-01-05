import api from '../';
import Fuse from 'fuse.js';

import IEscort from '../../interfaces/states/interface.escort';
import escorts from '../../dummy/escorts';
import getRandomNumber from '../../helpers/getRandomNumber';
import IPartialFilters from '../../interfaces/objects/interface.partial-filters';
import sleep from '../../helpers/sleep';

const obtainEscortsPost = async (filters?: IPartialFilters): Promise<IEscort[]> => {
  try {
    await sleep(getRandomNumber(500, 5000));

    let result = escorts;

    if (!filters) return result;

    const { appareance, city, name, promotion, services, type, video } = filters;

    console.log({ filters });

    if (type) {
      result = result.filter((escort) => escort.type === type);
    }

    if (name) {
      const fuse = new Fuse(result, {
        keys: ['name'],
        threshold: 0.2,
      });

      result = fuse.search(name).map((match) => match.item);
    }

    if (video) {
      result = result.filter((escort) => escort.videos.length);
    }

    // if ( appareance?.length ) {
    //   result = result.filter((escort) =>
    //     appareance.some((match) => escort.appareance.includes(match)),
    //   );
    // }

    if (services?.length) {
      result = result.filter((escort) => services.some((match) => escort.services.includes(match)));
    }

    return result;
  } catch (err: any) {
    console.error(err);

    return [];
  }
};

export default obtainEscortsPost;
