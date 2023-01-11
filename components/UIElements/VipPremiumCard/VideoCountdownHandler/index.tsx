import { useEffect, useRef } from 'react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Typography from '@mui/material/Typography';
import Videocam from '@mui/icons-material/Videocam';

import useCountdown from '../../../../hooks/useCountdown';

export interface IVideoCountdownHandlerProps {
  backgroundColor?: string;
  color?: string;
  hasVideos: boolean;
  onCountdownEnd?: () => void;
  onCountdownInit?: () => void;
  startCountdown: boolean;
}

const DEBOUNCE_TIME = 5000;
const STEP = 1000;

const VideoCountdownHandler = ({
  backgroundColor = 'rgba(0,0,0,0.5)',
  color = 'white',
  hasVideos,
  onCountdownEnd = () => {},
  onCountdownInit = () => {},
  startCountdown = false,
}: IVideoCountdownHandlerProps) => {
  const { countdown, api } = useCountdown({ timeInMs: DEBOUNCE_TIME, step: STEP });
  const apiRef = useRef(api);

  useEffect(() => {
    if (!hasVideos) return;

    if (startCountdown) apiRef.current.start();
    else apiRef.current.restart();
  }, [hasVideos, startCountdown, apiRef]);

  useEffect(() => {
    if (countdown <= 0) onCountdownEnd();
    else if (countdown * STEP === DEBOUNCE_TIME) onCountdownInit();
  }, [countdown, onCountdownEnd, onCountdownInit]);

  return (
    <div
      className={`ml-2 mb-2 d-flex jc-center`}
      style={{
        backgroundColor,
        borderRadius: '20px',
        color,
        width: '30px',
      }}
    >
      {countdown === 0 && <PlayArrow fontSize="small" />}
      {countdown === DEBOUNCE_TIME && <Videocam fontSize="small" />}
      {countdown > 0 && countdown < DEBOUNCE_TIME && (
        <Typography variant="subtitle2">{countdown}s</Typography>
      )}
    </div>
  );
};

export default VideoCountdownHandler;
