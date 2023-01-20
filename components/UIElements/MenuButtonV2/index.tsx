import { CSSProperties, useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';

import { AppContext } from '../../../pages/_app';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

export interface IMenuButtonProps {
  backgroundColor?: string;
  barSize?: number;
  onClick?: () => void;
  size?: number;
  style?: CSSProperties;
  type?: 'hover' | 'click';
}

const MenuButtonV2 = ({
  backgroundColor = '#000',
  barSize = 4,
  onClick,
  size = 40,
  style = {},
  type = 'hover',
}: IMenuButtonProps) => {
  const { theme } = useContext(AppContext);
  const [checked, setChecked] = useState<boolean>(false);
  const showSidebar = useSelector((state: RootState): boolean => state.ui.showSidebar);

  const normalColor = theme?.palette.getContrastText(backgroundColor);
  const hoverColor = theme?.palette.primary.main;
  const hasTrigger = checked || showSidebar;

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
    <IconButton
      onClick={onClick}
      size="small"
      style={{ height: size, width: size, ...style }}
      {...menuTrigger}
    >
      <div className={`d-flex jc-center ai-center`} style={{ height: size, width: size }}>
        <input className={`${styles.btnCheckbox}`} type="checkbox" checked={hasTrigger} />
        <label className={`${styles.btnLabel}`} style={{ height: size / 2, width: size / 2 }}>
          <div
            style={{ backgroundColor: hasTrigger ? hoverColor : normalColor, height: barSize }}
          />
          <div
            style={{ backgroundColor: hasTrigger ? hoverColor : normalColor, height: barSize }}
          />
          <div
            style={{ backgroundColor: hasTrigger ? hoverColor : normalColor, height: barSize }}
          />
        </label>
      </div>
    </IconButton>
  );
};

export default MenuButtonV2;
