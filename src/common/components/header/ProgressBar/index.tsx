import { useState, useEffect, useCallback } from 'preact/hooks';
import { useRouter } from 'next/router';
import { Box, Progress } from '@chakra-ui/react';

export interface IProgressBarProps {
  zIndex?: number;
}

const ProgressBar = ({ zIndex = 1500 }: IProgressBarProps) => {
  const router = useRouter();
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

  return <Progress value={20} size="xs" colorScheme="primary" zIndex={zIndex} />;
};

export default ProgressBar;
