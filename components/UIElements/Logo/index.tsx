import Box from '@mui/system/Box';
import FemaleOutlined from '@mui/icons-material/FemaleOutlined';
import Typography from '@mui/material/Typography';

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
          <Typography variant="h5">Kariñosas.cl</Typography>
        </Box>
      ) : (
        <Box
          className={`p-2 d-inline-flex jc-center ai-center`}
          sx={{
            backgroundColor,
            borderRadius: '30px',
            boxShadow: 1,
            height,
            margin: '0 auto',
          }}
        >
          <FemaleOutlined fontSize="small" color="primary" />
          <Typography variant="h6" fontSize={13}>
            Kariñosas.cl
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Logo;
