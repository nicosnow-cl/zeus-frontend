import { Button, MenuItem, Select, IconButton } from '@mui/material';
import {
  KeyboardArrowDown,
  MonetizationOn,
  LocationOn,
  Female,
  Male,
  Transgender,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import FakeDropdown from '../../FakeDropdown';
import getHexToRgb from '../../../../utils/getHexToRgb';
import styles from './index.module.scss';
import { useState, useEffect } from 'react';

export interface ITopBarProps {
  backgroundColor?: string;
}

const genders = ['Mujeres', 'Hombres', 'Trans'];

const renderValue = (value: string) => {
  switch (value) {
    case 'Mujeres':
      return <Female />;
    case 'Hombres':
      return <Male />;
    case 'Trans':
      return <Transgender />;
    default:
      return <></>;
  }
};

const TopBar = ({ backgroundColor }: ITopBarProps) => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const city = useSelector((state: RootState): string => state.ui.filters.city);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorRGB = backgroundColor ? getHexToRgb(backgroundColor).join(', ') : undefined;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  const handleOpenRegionsModal = () => {
    dispatch(uiActions.handleToggleRegionModal(true));
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar ${styles.topbar}`}
      style={{
        backgroundColor: `rgba(${backgroundColorRGB}, 0.9)`,
        height: visible ? '35px' : '0px',
      }}
    >
      <div className={`wrapper jc-between ${styles.simpleFilters}`}>
        <div className={`d-flex col-gap-3`}>
          <IconButton size="small" sx={{ color: 'white' }}>
            <LocationOn />
          </IconButton>

          <Select
            value={genders[0]}
            variant="standard"
            sx={{
              height: 35,
              color: 'white !important',
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
              '.MuiSelect-select': {
                display: 'flex',
              },
            }}
            IconComponent={KeyboardArrowDown}
            renderValue={renderValue}
          >
            {genders.map((lady, idx) => (
              <MenuItem key={idx} value={lady}>
                {lady}
              </MenuItem>
            ))}
          </Select>
        </div>

        <Button
          endIcon={<MonetizationOn />}
          size={`small`}
          sx={{ height: 35, borderRadius: 0 }}
          variant="contained"
        >
          Anunciarme
        </Button>
      </div>

      <div className={`wrapper jc-end ai-center col-gap-2 ${styles.filters}`}>
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
