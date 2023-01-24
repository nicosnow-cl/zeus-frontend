import styled from '@mui/system/styled';

type DivProps = {
  delay?: number;
};

const AnimatedCard = styled('div')<DivProps>(({ delay }) => ({
  animation: `${delay}s ease 0s normal forwards 1 show`,
  '@keyframes show': {
    '0%': {
      opacity: 0,
    },
    '66%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

export default AnimatedCard;
