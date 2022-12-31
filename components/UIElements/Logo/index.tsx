import { FemaleOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export interface ILogoProps {
  backgroundColor?: string;
  height?: number | string;
  navbar: boolean;
  onClick?: () => void;
  width?: number | string;
}

const Logo = ({
  backgroundColor,
  height = 70,
  navbar = false,
  onClick,
  width = 200,
}: ILogoProps) => {
  return (
    <>
      {navbar ? (
        <Box
          className={`d-flex jc-center ai-center`}
          sx={{
            backgroundColor,
            borderRadius: '0px 0px 30px 30px',
            boxShadow: 1,
            flex: '0 1 auto',
            height,
            left: '50%',
            position: 'absolute',
            transform: 'translateX(-50%)',
            width,
          }}
          onClick={onClick}
        >
          <FemaleOutlined fontSize="large" color="primary" />
          <Typography variant="h5" component="div">
            Kariñosas.cl
          </Typography>
        </Box>
      ) : (
        <Box
          className={`d-flex jc-center ai-center`}
          sx={{
            backgroundColor,
            borderRadius: '30px',
            boxShadow: 1,
            height,
            margin: '0 auto',
            width,
          }}
        >
          <FemaleOutlined fontSize="small" color="primary" />
          <Typography variant="body1" component="div" fontSize={13}>
            Kariñosas.cl
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Logo;
