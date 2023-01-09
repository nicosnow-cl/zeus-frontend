import { useEffect, useState } from 'react';

export interface IUseCountdownProps {
  timeInMs: number;
  step?: number;
}

export interface IUseCountdown {
  countdown: number;
  api: {
    start: () => void;
    stop: () => void;
    restart: () => void;
  };
}

const DEFAULT_STEP = 1000;

const useCountdown = ({ timeInMs, step = DEFAULT_STEP }: IUseCountdownProps): IUseCountdown => {
  const [countdown, setCountdown] = useState(timeInMs);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      if (countdown <= 0) clearInterval(this);
      else setCountdown((prev) => prev - step);
    }, step);

    return () => clearInterval(interval);
  }, [started, setCountdown, step, countdown]);

  const start = () => setStarted(true);
  const stop = () => setStarted(false);
  const restart = () => {
    setCountdown(timeInMs);
    setStarted(false);
  };

  return {
    countdown,
    api: {
      start,
      stop,
      restart,
    },
  } as const;
};

export default useCountdown;
