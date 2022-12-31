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
  const [scrollDir, setScrollDir] = useState<string>('up');
  const city = useSelector((state: RootState): string => state.ui.filters.city);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorRGB = backgroundColor ? getHexToRgb(backgroundColor).join(', ') : undefined;

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  const handleOpenRegionsModal = () => {
    dispatch(uiActions.handleToggleRegionModal(true));
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar ${styles.topbar}`}
      style={{
        backgroundColor: `rgba(${backgroundColorRGB}, 0.9)`,
        height: scrollDir === 'up' ? '35px' : '0px',
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
