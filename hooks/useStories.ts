import { useCallback, useMemo, useState } from 'react';

import IStory from '../interfaces/states/interface.story';

export interface IUseStoriesProps {
  selectedEscortStory: number;
  allStories: IStory[];
}

const useStories = ({ selectedEscortStory, allStories }: IUseStoriesProps) => {
  const [actualEscortIdx, setActualEscortIdx] = useState<number>(
    allStories.findIndex((story) => story.escortId === selectedEscortStory),
  );
  const [storyState, set] = useState<{ story: IStory | undefined; storyIdx: number }>({
    story: allStories[actualEscortIdx],
    storyIdx: 0,
  });

  const next = useCallback(() => {
    const { storyIdx, story } = storyState;
    const storiesLength = story?.videos.length || 0;

    if (storyIdx < storiesLength - 1) {
      set((prev) => ({ ...prev, storyIdx: storyIdx + 1 }));
    } else {
      const nextEscortIdx = actualEscortIdx + 1;

      if (nextEscortIdx < allStories.length) {
        setActualEscortIdx(nextEscortIdx);
        set({ story: allStories[nextEscortIdx], storyIdx: 0 });
      }
    }
  }, [actualEscortIdx, allStories, storyState]);

  const prev = useCallback(() => {
    const { storyIdx } = storyState;

    if (storyIdx > 0) {
      set((prev) => ({ ...prev, storyIdx: storyIdx - 1 }));
    } else {
      const prevEscortIdx = actualEscortIdx - 1;

      if (prevEscortIdx >= 0) {
        setActualEscortIdx(prevEscortIdx);
        set({
          story: allStories[prevEscortIdx],
          storyIdx: allStories[prevEscortIdx].videos.length - 1,
        });
      }
    }
  }, [actualEscortIdx, allStories, storyState]);

  return useMemo(
    () => ({
      controls: {
        next,
        prev,
      },
      story: storyState.story?.videos[storyState.storyIdx],
      metadata: {
        actualEscortIdx,
        storyIdx: storyState.storyIdx,
        totalStories: storyState.story?.videos.length || 0,
        avatar: storyState.story?.avatarSrc,
        name: storyState.story?.name.split(' ')[0],
        publishDate: storyState.story?.publishDate,
      },
    }),
    [
      actualEscortIdx,
      next,
      prev,
      storyState.story?.avatarSrc,
      storyState.story?.name,
      storyState.story?.publishDate,
      storyState.story?.videos,
      storyState.storyIdx,
    ],
  );
};

export default useStories;
