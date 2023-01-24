import { RefObject, useCallback, useEffect, useState } from 'react';

export interface IStoryProgressBarsProps {
  activeBar?: number;
  handleNext?: () => void;
  totalBars?: number;
  videoRef: RefObject<HTMLVideoElement>;
}

export interface IProgressBarProps {
  progress?: number;
}

const ProgressBar = ({ progress = 0 }: IProgressBarProps) => {
  return (
    <div style={{ backgroundColor: '#bbb', width: '100%' }}>
      <div
        style={{
          backgroundColor: 'white',
          height: '3px',
          transition: 'width 0.25s linear',
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

const StoryProgressBars = ({
  activeBar = 0,
  handleNext = () => undefined,
  totalBars = 1,
  videoRef,
}: IStoryProgressBarsProps) => {
  const [progress, setProgress] = useState(0);

  const handleProgress = useCallback(
    (current: HTMLVideoElement) => {
      const finished = current.ended;

      if (finished) {
        handleNext();
        return;
      }

      if (current) {
        const duration = current.duration;
        const currentTime = current.currentTime;

        setProgress(Math.floor((currentTime / duration) * 100));
      }
    },
    [handleNext],
  );

  useEffect(() => {
    const { current } = videoRef;
    if (!current) return;

    const intervalId = setInterval(() => handleProgress(current), 250);

    return () => clearInterval(intervalId);
  }, [videoRef, handleProgress]);

  return (
    <div className={`d-flex col-gap-1`}>
      {Array.from({ length: totalBars }, (_, i) => i).map((bar, idx) => (
        <ProgressBar
          key={idx}
          progress={idx === activeBar ? progress : idx < activeBar ? 100 : 0}
        />
      ))}
    </div>
  );
};

export default StoryProgressBars;
