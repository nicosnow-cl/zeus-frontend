import { useState, useContext, useEffect, useCallback } from 'react';

import { AppContext } from '../../../../pages/_app';

export interface IProgressBarProps {
  zIndex?: number;
}

const ProgressBar = ({ zIndex = 1500 }: IProgressBarProps) => {
  const { theme, router } = useContext(AppContext);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);

  const increaseProgressDynamicSteps = useCallback(() => {
    setProgress((prev) => prev + Math.ceil(Math.random()) / (prev || 0.015));
  }, []);

  const increaseDone = () => {
    setProgress(100);

    const intervalId = setInterval(() => {
      setStart(false);
      setProgress(0);
      clearInterval(intervalId);
    }, 50);
  };

  useEffect(() => {
    if (!start) return;

    const intervalId = setInterval(increaseProgressDynamicSteps, 100);

    return () => clearInterval(intervalId);
  }, [start, increaseProgressDynamicSteps]);

  router?.events.on('routeChangeStart', () => setStart(true));
  router?.events.on('routeChangeComplete', () => increaseDone());
  router?.events.on('routeChangeError', () => increaseDone());

  return (
    <div style={{ backgroundColor: 'transparent', width: '100%', position: 'fixed', zIndex }}>
      <div
        style={{
          backgroundColor: theme?.palette.primary.main,
          height: '3px',
          transition: 'width 0.1s linear',
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
