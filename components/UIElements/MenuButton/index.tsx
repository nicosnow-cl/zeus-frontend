import { Box } from '@mui/system';
import { IconButton, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IUiState } from '../../../redux/reducers/ui';
import { RootState } from '../../../redux/store';
import checkIfIsServer from '../../../utils/checkIfIsServer';
import getThemeMode from '../../../utils/getThemeMode';
import styles from './index.module.scss';

const isServer = checkIfIsServer();

export interface IMenuButtonProps {
  customClasses?: string;
  type?: 'hover' | 'click';
  onClick?: (evt: any) => void;
  sx: any;
}

const MenuButton = ({ customClasses, type = 'hover', onClick, sx }: IMenuButtonProps) => {
  const { showSidebar } = useSelector((state: RootState): IUiState => state.ui);
  const [checked, setChecked] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');
  const theme = useTheme();

  const mode = !isServer ? getThemeMode() : 'light';

  useEffect(() => {
    if (mode === 'light') setColor(theme.palette.grey[900]);
    else setColor(theme.palette.grey['A200']);
  }, [mode, theme.palette.grey]);

  const menuTrigger =
    type === 'hover'
      ? {
          onMouseEnter: () => setChecked(true),
          onMouseLeave: () => setChecked(false),
        }
      : {
          onClick: () => setChecked((prevValue) => !prevValue),
        };

  return (
    <Box sx={sx}>
      <IconButton
        className={`${customClasses}`}
        color="primary"
        component="label"
        onClick={onClick}
        size="large"
        {...menuTrigger}
      >
        <Box id={`${styles['webapp_cover']}`}>
          <Box id={`${styles['menu_button']}`}>
            <input
              checked={checked || showSidebar}
              id={`${styles['menu_checkbox']}`}
              onClick={(evt) => evt.stopPropagation()}
              type="checkbox"
            />
            <Box
              id={`${styles['menu_label']}`}
              sx={{
                '&::before': { backgroundColor: color },
                '&:after': { backgroundColor: color },
              }}
            >
              <Box id={`${styles['menu_text_bar']}`} sx={{ color, backgroundColor: color }} />
            </Box>
          </Box>
        </Box>
      </IconButton>
    </Box>
  );
};

export default MenuButton;
