import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';

import { RootState } from '../../../redux/store';
import checkIfIsServer from '../../../helpers/checkIfIsServer';
import getThemeMode from '../../../helpers/getThemeMode';
import styles from './index.module.scss';

const isServer = checkIfIsServer();

export interface IMenuButtonProps {
  customClasses?: string;
  type?: 'hover' | 'click';
  onClick?: (evt: any) => void;
  style: any;
}

const MenuButton = ({ customClasses, type = 'hover', onClick, style }: IMenuButtonProps) => {
  const showSidebar = useSelector((state: RootState): boolean => state.ui.showSidebar);
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
    <div style={style}>
      <IconButton
        className={`${customClasses}`}
        color="primary"
        component="label"
        onClick={onClick}
        size="large"
        {...menuTrigger}
      >
        <div id={`${styles['webapp_cover']}`}>
          <div id={`${styles['menu_button']}`}>
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
              <div id={`${styles['menu_text_bar']}`} style={{ color, backgroundColor: color }} />
            </Box>
          </div>
        </div>
      </IconButton>
    </div>
  );
};

export default MenuButton;
