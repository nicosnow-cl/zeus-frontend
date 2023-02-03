import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Select from '@mui/material/Select';

import { AppDispatch, RootState } from '../../../../../redux/store';
import { uiActions } from '../../../../../redux/reducers/ui';
import FakeDropdown from '../../../FakeDropdown';
import getHexToRgb from '../../../../../helpers/getHexToRgb';

export interface ITopBarProps {
  backgroundColor?: string;
  height?: number;
}

const GENDERS = ['Mujeres', 'Hombres', 'Trans'];
const TOPBAR_HEIGHT = 20;

const TopBar = ({ backgroundColor, height = TOPBAR_HEIGHT }: ITopBarProps) => {
  const city = useSelector((state: RootState): string => state.ui.filters.city);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorRGB = backgroundColor ? getHexToRgb(backgroundColor).join(', ') : undefined;

  const handleOpenRegionsModal = () => {
    dispatch(uiActions.handleToggleRegionModal(true));
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar`}
      style={{
        backgroundColor: `rgba(${backgroundColorRGB}, 0.9)`,
        height: `${height}px`,
      }}
    >
      <div className={`wrapper d-flex jc-end ai-center col-gap-2`}>
        <FakeDropdown
          height={height}
          label={city}
          onClick={handleOpenRegionsModal}
          width={`125px`}
        />

        <Select
          value={GENDERS[0]}
          variant="standard"
          sx={{
            height: height,
            width: 125,
            color: 'white !important',
            '.MuiSvgIcon-root ': {
              fill: 'white !important',
            },
          }}
          IconComponent={KeyboardArrowDown}
        >
          {GENDERS.map((lady, idx) => (
            <MenuItem key={idx} value={lady}>
              {lady}
            </MenuItem>
          ))}
        </Select>

        <Button
          endIcon={<MonetizationOn />}
          size={`small`}
          sx={{ height: height, borderRadius: 0 }}
          variant="contained"
        >
          Anunciarme
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
