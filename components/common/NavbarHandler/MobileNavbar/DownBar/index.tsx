import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../../../redux/store';
import { uiActions } from '../../../../../redux/reducers/ui';
import Constants from '../../../../../helpers/constants';
import getHexToRgb from '../../../../../helpers/getHexToRgb';
import LogoIcon from '../../../../customIcons/LogoIcon';
import MenuButtonV2 from '../../../MenuButtonV2';

export interface IDownBarProps {
  backgroundColor?: string;
  height?: number;
}

const { AppName } = Constants;
const DOWNBAR_HEIGHT = 40;

const DownBar = ({ backgroundColor, height = DOWNBAR_HEIGHT }: IDownBarProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorRGB = backgroundColor ? getHexToRgb(backgroundColor).join(', ') : undefined;

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  return (
    <div
      className={`px-2 d-flex jc-between ai-center`}
      style={{ backgroundColor: `rgba(${backgroundColorRGB}, 0.8)`, height }}
    >
      <div className={`d-flex ai-center`}>
        <LogoIcon color="primary" sx={{ fontSize: '1.6rem' }} />
        <Typography
          variant="h5"
          fontSize={16}
          sx={(theme) => ({
            color: theme.palette.getContrastText(backgroundColor || ''),
          })}
        >
          {AppName}
        </Typography>
      </div>

      <MenuButtonV2
        backgroundColor={backgroundColor}
        barSize={3}
        onClick={handleOpenSidebar}
        size={height * 0.85}
      />
    </div>
  );
};

export default DownBar;
