import { Close, FemaleOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export interface IDialogNavbarProps {
  onClose?: () => void;
}

const DialogNavbar = ({ onClose }: IDialogNavbarProps) => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[200],
        boxShadow: 1,
        position: 'relative',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box className={`w-100 d-flex jc-end`}>
          <Box
            className={`d-flex jc-center ai-center`}
            sx={{
              backgroundColor: theme.palette.grey[50],
              borderRadius: '30px',
              bottom: 0,
              boxShadow: 1,
              flex: '0 1 auto',
              height: 64,
              left: '50%',
              position: 'absolute',
              transform: 'translateX(-50%)',
              width: 200,
            }}
          >
            <FemaleOutlined fontSize="large" color="primary" />
            <Typography variant="h5" component="div">
              Tu Secreto
            </Typography>
          </Box>

          <IconButton edge="end" color="secondary" onClick={onClose} aria-label="close">
            <Close />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DialogNavbar;
