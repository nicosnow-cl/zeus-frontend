import { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import DraggableButton from '../../../common/DraggableButton';
import IFilters from '../../../../interfaces/states/interface.filters';
import styles from './index.module.scss';

const SmallButtonFilters = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const containerRef = useRef<HTMLDivElement>(null);

  const backgroundColor = theme?.palette.grey[100];
  const btnSize = 50;
  const color = theme?.palette.grey[500];
  const holderBackgroundColor = theme?.palette.grey[200];

  const handleOpenFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  return (
    <Box
      ref={containerRef}
      className={`w-100 pointer d-flex`}
      onClick={handleOpenFiltersModal}
      sx={{
        backgroundColor,
        borderRadius: 6,
        boxShadow: 1,
        color,
        height: btnSize,
      }}
    >
      <div
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
        }}
        style={{
          backgroundColor: holderBackgroundColor,
          borderRadius: '50%',
          height: btnSize,
          minWidth: btnSize,
        }}
      >
        <DraggableButton
          containerRef={containerRef}
          btnSize={btnSize}
          onClick={handleOpenFiltersModal}
        />
      </div>

      <div className={`pl-2 pr-3 w-100 d-flex jc-between ai-center ${styles.filtersContainer}`}>
        <Typography
          sx={{ color: filters.name.length && theme?.palette.getContrastText(backgroundColor) }}
        >
          Nombre
        </Typography>
        <Typography
          sx={{
            color: filters.appareance.length && theme?.palette.getContrastText(backgroundColor),
          }}
        >
          Apariencia
        </Typography>
        <Typography
          sx={{
            color: filters.services.length && theme?.palette.getContrastText(backgroundColor),
          }}
        >
          Servicios
        </Typography>
      </div>
    </Box>
  );
};

export default SmallButtonFilters;
