import { Box } from '@mui/system';

export interface IContentContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const ContentContainer = ({ children }: IContentContainerProps) => {
  return (
    <Box className={`wrapper pb-5`} sx={{ margin: '0 auto', paddingTop: '100px' }}>
      {children}
    </Box>
  );
};

export default ContentContainer;
