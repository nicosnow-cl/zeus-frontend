import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';

import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import IFilters from '../../../../interfaces/states/interface.filters';
import styles from './index.module.scss';
import { useEffect, useRef, useState } from 'react';
import DraggableButton from '../../../UIElements/DraggableButton';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SmallButtonFilters = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState): IFilters => state.ui.filters);
  const btnSize = 50;

  const handleOpenFiltersModal = () => {
    dispatch(uiActions.handleToggleFiltersModal(true));
  };

  return (
    <Box
      className={`w-100 pointer d-flex jc-between ai-center ${styles.filtersContainer}`}
      //   onClick={handleOpenFiltersModal}
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[100],
        borderRadius: 5,
        boxShadow: 1,
      })}
    >
      <Box
        ref={holderRef}
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[200],
          borderRadius: '50%',
          height: btnSize,
          width: btnSize,
        })}
      >
        <DraggableButton onClick={handleOpenFiltersModal} />
      </Box>

      <Typography color="disabled">Nombre</Typography>
      <Typography color="disabled">Apariencia</Typography>
      <Typography className={`pr-3`} color="disabled">
        Servicios
      </Typography>
    </Box>
  );
};

export default SmallButtonFilters;
