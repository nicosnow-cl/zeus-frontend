import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Select from '@mui/material/Select';

import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import FakeDropdown from '../../FakeDropdown';
import getHexToRgb from '../../../../helpers/getHexToRgb';
import styles from './index.module.scss';
import useNavbar from '../../../../hooks/useNavbar';

export interface ITopBarProps {
  backgroundColor?: string;
}

const genders = ['Mujeres', 'Hombres', 'Trans'];

const TopBar = ({ backgroundColor }: ITopBarProps) => {
  const backgroundColorRGB = backgroundColor ? getHexToRgb(backgroundColor).join(', ') : undefined;
  const city = useSelector((state: RootState): string => state.ui.filters.city);
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useNavbar({});

  const handleOpenRegionsModal = () => {
    dispatch(uiActions.handleToggleRegionModal(true));
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar ${styles.topbar}`}
      style={{
        backgroundColor: `rgba(${backgroundColorRGB}, 0.9)`,
        height: isVisible ? '35px' : '0px',
      }}
    >
      <div className={`wrapper d-flex jc-end ai-center col-gap-2`}>
        <FakeDropdown
          height={`35px`}
          label={city}
          onClick={handleOpenRegionsModal}
          width={`125px`}
        />

        <Select
          value={genders[0]}
          variant="standard"
          sx={{
            height: 35,
            width: 125,
            color: 'white !important',
            '.MuiSvgIcon-root ': {
              fill: 'white !important',
            },
          }}
          IconComponent={KeyboardArrowDown}
        >
          {genders.map((lady, idx) => (
            <MenuItem key={idx} value={lady}>
              {lady}
            </MenuItem>
          ))}
        </Select>

        <Button
          endIcon={<MonetizationOn />}
          size={`small`}
          sx={{ height: 35, borderRadius: 0 }}
          variant="contained"
        >
          Anunciarme
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
