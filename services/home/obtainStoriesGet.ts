import api from '../';

import sleep from '../../utils/sleep';
import IStory from '../../interfaces/states/interface.story';
import stories from '../../dummy/stories';

const storiesSorted = stories.sort(
  (story1, story2) =>
    new Date(story2.publishDate).getTime() - new Date(story1.publishDate).getTime(),
);

const obtainStoriesGet = async (): Promise<IStory[]> => {
  try {
    await sleep(1000);

    return storiesSorted;
  } catch (err: any) {
    console.error(err);

    return [];
  }
};

export default obtainStoriesGet;
