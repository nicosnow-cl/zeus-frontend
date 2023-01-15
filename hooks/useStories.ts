import { useCallback, useState } from 'react';
import IImage from '../interfaces/objects/interface.image';

import IVideo from '../interfaces/objects/interface.video';
import IStory from '../interfaces/states/interface.story';

export interface IUseStoriesProps {
  selectedEscortStory: number;
  stories: IStory[];
}

interface IStoryMetadata {
  avatar: IImage;
  escortId: number;
  hasNext: boolean;
  hasPrev: boolean;
  name: string;
  publishDate: string;
  totalStories: number;
  videoIdx: number;
}

interface IFlattedStory {
  avatar: IImage;
  escortId: number;
  name: string;
  publishDate: string;
  video: IVideo;
  videoIdx: number;
}

const getFlattedStories = (stories: IStory[]) => {
  const flattedStories: IFlattedStory[] = [];

  stories.forEach((story) => {
    const { avatarSrc, escortId, name, publishDate, videos } = story;

    videos.forEach((video, idx) => {
      flattedStories.push({
        avatar: avatarSrc,
        escortId,
        name,
        publishDate,
        video,
        videoIdx: idx,
      });
    });
  });

  return flattedStories;
};

const useStories = ({ selectedEscortStory, stories }: IUseStoriesProps) => {
  const [actualEscortIdx, setActualEscortIdx] = useState<number>(
    stories.findIndex((story) => story.escortId === selectedEscortStory),
  );

  const firstStoryLoaded = stories[actualEscortIdx];

  console.log(stories.length > 1);

  const [metadata, setMetadata] = useState<IStoryMetadata>({
    avatar: firstStoryLoaded.avatarSrc,
    escortId: firstStoryLoaded.escortId,
    hasNext: firstStoryLoaded.videos.length > 1 || stories.length > 1,
    hasPrev: actualEscortIdx > 0,
    name: firstStoryLoaded.name,
    publishDate: firstStoryLoaded.publishDate,
    totalStories: firstStoryLoaded.videos.length,
    videoIdx: 0,
  });
  const [video, setVideo] = useState<IVideo>(firstStoryLoaded.videos[0]);

  const next = useCallback(() => {
    const { videoIdx, totalStories, hasNext } = metadata;
    if (!hasNext) return;

    // steps: 1. check if there is a next video in the same story
    //        2. check if there is a next story
    //        3. if there is a next story, load the first video of the next story

    if (videoIdx < totalStories - 1) {
      setMetadata((prev) => ({
        ...prev,
        videoIdx: videoIdx + 1,
        hasNext: true,
        hasPrev: true,
      }));
      setVideo(stories[actualEscortIdx].videos[videoIdx + 1]);
    } else {
      const nextEscortIdx = actualEscortIdx + 1;

      if (nextEscortIdx < stories.length) {
        setActualEscortIdx(nextEscortIdx);
        setMetadata({
          avatar: stories[nextEscortIdx].avatarSrc,
          escortId: stories[nextEscortIdx].escortId,
          hasNext: true,
          hasPrev: true,
          name: stories[nextEscortIdx].name,
          publishDate: stories[nextEscortIdx].publishDate,
          totalStories: stories[nextEscortIdx].videos.length,
          videoIdx: 0,
        });
        setVideo(stories[nextEscortIdx].videos[0]);
      } else {
        setMetadata((prev) => ({ ...prev, hasPrev: true, hasNext: false }));
      }
    }
  }, [actualEscortIdx, stories, metadata]);

  const prev = useCallback(() => {
    const { videoIdx, hasPrev } = metadata;
    if (!hasPrev) return;

    // steps: 1. check if there is a prev video in the same story
    //        2. check if there is a prev story
    //        3. if there is a prev story, load the last video of the prev story

    if (videoIdx > 0) {
      setMetadata((prev) => ({
        ...prev,
        videoIdx: videoIdx - 1,
        hasNext: true,
        hasPrev: true,
      }));
      setVideo(stories[actualEscortIdx].videos[videoIdx - 1]);
    } else {
      const prevEscortIdx = actualEscortIdx - 1;

      if (prevEscortIdx >= 0) {
        setActualEscortIdx(prevEscortIdx);
        setMetadata({
          avatar: stories[prevEscortIdx].avatarSrc,
          escortId: stories[prevEscortIdx].escortId,
          hasNext: true,
          hasPrev: true,
          name: stories[prevEscortIdx].name,
          publishDate: stories[prevEscortIdx].publishDate,
          totalStories: stories[prevEscortIdx].videos.length,
          videoIdx: stories[prevEscortIdx].videos.length - 1,
        });
        setVideo(stories[prevEscortIdx].videos[stories[prevEscortIdx].videos.length - 1]);
      } else {
        setMetadata((prev) => ({ ...prev, hasPrev: false, hasNext: true }));
      }
    }
  }, [actualEscortIdx, stories, metadata]);

  console.count('useStories render');

  return {
    controls: { prev, next },
    metadata,
    video,
  };
};

export default useStories;
