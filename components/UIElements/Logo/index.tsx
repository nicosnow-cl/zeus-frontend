import Box from '@mui/system/Box';
import LogoIcon from '../../custom-icons/LogoIcon';
import Typography from '@mui/material/Typography';

import Constants from '../../../helpers/constants';

export interface ILogoProps {
  backgroundColor?: string;
  height?: number | string;
  navbar: boolean;
  onClick?: () => void;
  width?: number | string;
}

const { AppName } = Constants;

const Logo = ({
  backgroundColor,
  height = 70,
  navbar = false,
  onClick,
  width = 175,
}: ILogoProps) => {
  return (
    <>
      {navbar ? (
        <Box
          className={`d-flex jc-center ai-center ${onClick ? 'pointer' : ''} }`}
          onClick={onClick}
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
        >
          <LogoIcon color="primary" sx={{ fontSize: '2.5rem' }} />
          <Typography
            variant="h5"
            sx={(theme) => ({ color: theme.palette.getContrastText(backgroundColor || '') })}
          >
            {AppName}
          </Typography>
        </Box>
      ) : (
        <Box
          className={`p-2 d-inline-flex jc-center ai-center ${onClick ? 'pointer' : ''}`}
          onClick={onClick}
          sx={{
            backgroundColor,
            borderRadius: '30px',
            boxShadow: 1,
            height,
            margin: '0 auto',
          }}
        >
          <LogoIcon color="primary" sx={{ fontSize: '1.5rem' }} />
          <Typography
            variant="h6"
            fontSize={13}
            sx={(theme) => ({ color: theme?.palette.getContrastText(backgroundColor || '') })}
          >
            {AppName}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Logo;
