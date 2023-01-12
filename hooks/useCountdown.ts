import { useEffect, useMemo, useState } from 'react';

export interface IUseCountdownProps {
  exact?: boolean;
  step?: number;
  timeInMs: number;
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

const useCountdown = ({
  exact = false,
  step = DEFAULT_STEP,
  timeInMs,
}: IUseCountdownProps): IUseCountdown => {
  const [countdown, setCountdown] = useState(timeInMs);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const intervalId = setInterval(() => {
      if (countdown <= 0) clearInterval(intervalId);
      else setCountdown((prev) => prev - step);
    }, step);

    return () => {
      clearInterval(intervalId);
    };
  }, [started, setCountdown, step, countdown]);

  const { start, stop, restart } = useMemo(
    () => ({
      start: () => setStarted(true),
      stop: () => setStarted(false),
      restart: () => {
        setCountdown(timeInMs);
        setStarted(false);
      },
    }),
    [setCountdown, setStarted, timeInMs],
  );

  return {
    countdown: exact ? countdown : Math.ceil(countdown / 1000),
    api: {
      start,
      stop,
      restart,
    },
  } as const;
};

export default useCountdown;
